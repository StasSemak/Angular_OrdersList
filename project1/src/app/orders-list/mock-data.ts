import { IOrder } from "./order-item";
import { IProduct } from "./product";

const PRODUCTS1: IProduct[] = [
    {
        name: "Apple",
        price: 10
    },
    {
        name: "Milk",
        price: 33
    },
    {
        name: "Banana",
        price: 25
    },
    {
        name: "Water",
        price: 8
    }
]
const PRODUCTS2: IProduct[] = [
    {
        name: "Beef",
        price: 120
    },
    {
        name: "Salt",
        price: 5
    },
    {
        name: "Potato",
        price: 7.5
    },
    {
        name: "Ketchup",
        price: 20
    }
]
const PRODUCTS3: IProduct[] = [
    {
        name: "Bread",
        price: 15
    },
    {
        name: "Cheese",
        price: 48
    },
    {
        name: "Yougurt",
        price: 18
    }
]

export const ORDERS: IOrder[] = [
    {
        name: "Andrew's order",
        date: new Date(2022, 11, 3),
        products: PRODUCTS1,
        delivered: true
    },
    {
        name: "Anonimous order",
        date: new Date(2022, 11, 8),
        products: PRODUCTS2,
        delivered: false
    },
    {
        name: "New order",
        date: new Date(2022, 11, 2),
        products: PRODUCTS3,
        delivered: true
    }
]