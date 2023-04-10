import {createClient} from '@sanity/client'
import {useMerchantStore} from "@/stores/merchant.store";
import type {Item} from "@/types/item";
import type Character from "@/types/character";
import { v4 as uuidv4 } from 'uuid';

export class Client {

    async findAllWithRefs(type: string, refs: Array<string> = []): Promise<Array<any>> {
        const sanityClient = this.getSanityClient();
        return await sanityClient.fetch(this.assembleQueryString(type, refs));
    }

    async findOneWithRefs(id: string, type: string, refs: Array<string> = []): Promise<any> {
        const sanityClient = this.getSanityClient();
        return await sanityClient.fetch(this.assembleQueryString(type, refs, id));
    }

    async buyItem(char: Character, item: Item): Promise<boolean> {
        const sanityClient = this.getSanityClient();
        const itemReference = {
            _key: uuidv4(), // generate a unique key for the new reference
            _ref: item._id,
            _type: 'item'
        };

        return sanityClient
            .patch(char._id) // Document ID to patch
            .dec({money: item.price}) // Shallow merge
            .setIfMissing({items: []})
            .insert('after', 'items[-1]', [itemReference])
            .commit() // Perform the patch and return a promise
            .then((updatedChar) => {
                return true;
            })
            .catch((err) => {
                console.error('Oh no, the update failed: ', err.message)
                return false;
            })
    }

    private getSanityClient() {
        const merchantStore = useMerchantStore();
        return createClient({
            projectId: merchantStore.projectId,
            dataset: merchantStore.dataset,
            useCdn: false, // set to `true` to fetch from edge cache
            apiVersion: new Date().toISOString().slice(0, 10), // use current date (YYYY-MM-DD) to target the latest API version
            token: import.meta.env.VITE_API_TOKEN,
            ignoreBrowserTokenWarning: true
        })
    }

    private assembleQueryString(schemaName: string, refs: Array<string>, id: string = ''): string {
        let refsQueryString = "";
        refs.forEach((ref) => {
            refsQueryString += `${ref}[]-> { ... },`
        })
        if (id !== '') {
            return `*[_type == "${schemaName}"]` +
                `{
                    ...,
                    ${refsQueryString}
                }` +
                `[_id=="${id}"]`
        } else {
            return `*[_type == "${schemaName}"]` +
                `{
                    ...,
                    ${refsQueryString}
                }`
        }
    }
}
