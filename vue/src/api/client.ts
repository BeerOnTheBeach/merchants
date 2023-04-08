import {createClient, SanityClient} from '@sanity/client'
import {useMerchantStore} from "@/stores/merchant.store";

export class Client {

    async findAllWithRefs(type: string, refs: Array<string> = []): Promise<Array<any>> {
        const sanityClient = this.getSanityClient();
        return await sanityClient.fetch(this.assembleQueryString(type, refs));
    }

    async findOneWithRefs(id: string, type: string, refs: Array<string> = []): Promise<any> {
        const sanityClient = this.getSanityClient();
        return await sanityClient.fetch(this.assembleQueryString(type, refs, id));
    }

    private getSanityClient() {
        const merchantStore = useMerchantStore();
        return createClient({
            projectId: merchantStore.projectId,
            dataset: merchantStore.dataset,
            useCdn: false, // set to `true` to fetch from edge cache
            apiVersion: new Date().toISOString().slice(0, 10) // use current date (YYYY-MM-DD) to target the latest API version
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
