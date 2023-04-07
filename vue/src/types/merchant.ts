import type {Item} from "@/types/item";

export class Merchant {
    name:string;
    items:Array<Item>

    constructor(merchant:Merchant) {
        this.name = merchant.name;
        this.items = merchant.items;
    }

}