import type {Image} from "@/types/image";

export class Item {
    name:string;
    price:number;
    description:string;
    image:Image;

    constructor(merchant:Item) {
        this.name = merchant.name;
        this.price = merchant.price;
        this.description = merchant.description;
        this.image = merchant.image;
    }

}