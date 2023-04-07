import type {Merchant} from "@/types/merchant";

export class Client {
    projectId: string = "fwwexqik";
    dataset: string = "production";
    baseURL: string = `https://${this.projectId}.api.sanity.io/v2021-10-21/data/query/${this.dataset}?query=`;


    async request(query: string): Promise<Array<Merchant>> {
        const result = await fetch(this.baseURL + this.assembleQuery(query))
            .then((res) => res.json())
            .then(({result}) => {
                    return result;

            })
            .catch((err) => console.error(err));
        console.log(result);
        return result;
    }

    private assembleQuery(schemaName:string): string {
        return encodeURIComponent(`*[_type == "${schemaName}"]`)
    }
}