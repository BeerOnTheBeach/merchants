import type Merchant from "@/types/merchant";
import type {Image} from "@/types/image";
import Entity from "@/types/entity";

export default class Location extends Entity {
    name: string;
    description: string;
    merchants: Array<Merchant>
    image: Image;
    active: boolean;

    constructor(id: string, rev: string,
                type: string, createdAt: string,
                updatedAt: string, name: string,
                description: string,
                merchants: Array<Merchant>, image: Image,
                active: boolean
    ) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.description = description;
        this.merchants = merchants;
        this.image = image;
        this.active = active;
    }
}