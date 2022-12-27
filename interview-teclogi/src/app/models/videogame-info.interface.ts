import { Deal } from "./deal.interface";

export interface VideogameInfo{
    info?:{
        title: string;
        steamAppID: number;
        thumb: string;
    };
    cheapestPriceEver?:{
        price: number;
        date: number;
    };
    deals: Deal[];
}