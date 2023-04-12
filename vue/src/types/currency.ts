import type {Image} from "@/types/image";

export class Currency {
    name:string;
    factor:number;
    currencyHigher:Currency;
    icon:Image;


    constructor(name: string, factor: number, currencyHigher: Currency, icon: Image) {
        this.name = name;
        this.factor = factor;
        this.currencyHigher = currencyHigher;
        this.icon = icon;
    }
}