import { IProduct } from "./product";

export interface IOrder{
    name: string;
    date: Date;
    products: IProduct[];
    delivered: boolean;
}