import type Merchant from "@/types/merchant";
import type {Image} from "@/types/image";
import Entity from "@/types/entity";

export default class Location extends Entity {
    name: string;
    merchants: Array<Merchant>
    image: Image;

    constructor(id: string, rev: string, type: string, createdAt: string, updatedAt: string, name: string, merchants: Array<Merchant>, image: Image) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.merchants = merchants;
        this.image = image;
    }
}