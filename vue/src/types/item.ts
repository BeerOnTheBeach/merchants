import type {Image} from "@/types/image";
import Entity from "@/types/entity";

export class Item extends Entity{
    name:string;
    price:number;
    description:string;
    image:Image;


    constructor(id: string, rev: string, type: string, createdAt: string, updatedAt: string, name: string, price: number, description: string, image: Image) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}