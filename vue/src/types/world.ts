import type Character from "@/types/character";
import type {Image} from "@/types/image";
import Entity from "@/types/entity";

export class World extends Entity{
    name:string;
    description:string;
    locations:Array<Location>;
    characters:Array<Character>;
    image:Image;
    active:boolean;

    constructor(id: string, rev: string, type: string, createdAt: string, updatedAt: string, name: string, description: string, locations: Array<Location>, characters: Array<Character>, image: Image, active: boolean) {
        super(id, rev, type, createdAt, updatedAt);
        this.name = name;
        this.description = description;
        this.locations = locations;
        this.characters = characters;
        this.image = image;
        this.active = active;
    }
}