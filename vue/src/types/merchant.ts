import type {Item} from "@/types/item";
import type {Image} from "@/types/image";
import Entity from "@/types/entity";

export default class Merchant extends Entity {
    name: string;
    items: Array<Item>
    image: Image;

    constructor(id: string, rev: string, type: string, createdAt: string, updatedAt: string, name: string, items: Array<Item>, image: Image) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.items = items;
        this.image = image;
    }
}