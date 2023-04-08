import type {Merchant} from "@/types/merchant";

export class Client {
    projectId: string = "fwwexqik";
    dataset: string = "production";
    baseURL: string = `https://${this.projectId}.api.sanity.io/v2021-10-21/data/query/${this.dataset}?query=`;


    async request(query: string): Promise<Array<Merchant>> {
        return await fetch(this.baseURL + this.assembleQuery(query))
            .then((res) => res.json())
            .then(({result}) => {
                return result;

            })
            .catch((err) => console.error(err));
    }

    async requestWithRefs(query: string, refs: Array<string>): Promise<Array<Merchant>> {
        return await fetch(this.baseURL + this.assembleRefQuery(query, refs))
            .then((res) => res.json())
            .then(({result}) => {
                return result;

            })
            .catch((err) => console.error(err));
    }

    private assembleQuery(schemaName:string): string {
        return encodeURIComponent(`*[_type == "${schemaName}"]`)
    }

    private assembleRefQuery(schemaName:string, refs: Array<string>): string {
        let refsQueryString = "";
        refs.forEach((ref) => {
            refsQueryString += `${ref}[]-> { ... },`
        })
        return encodeURIComponent(
            `*[_type == "${schemaName}"]` +
            `{
                ...,
                ${refsQueryString}
            }`
        )
    }
}