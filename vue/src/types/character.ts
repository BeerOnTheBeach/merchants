import type {Image} from "@/types/image";
import Entity from "@/types/entity";
import type {Item} from "@/types/item";

export default class Character extends Entity {
    name: string;
    money: number;
    items: Array<Item>
    image: Image;
    active: boolean;

    constructor(id: string, rev: string,
                type: string, createdAt: string,
                updatedAt: string, name: string,
                money: number,
                items: Array<Item>, image: Image,
                active: boolean
    ) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.money = money;
        this.items = items;
        this.image = image;
        this.active = active;
    }
}