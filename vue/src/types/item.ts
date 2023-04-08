import type {Image} from "@/types/image";

export class Item {
    name:string;
    price:number;
    description:string;
    image:Image;

    constructor(item:Item) {
        this.name = item.name;
        this.price = item.price;
        this.description = item.description;
        this.image = item.image;
    }

}