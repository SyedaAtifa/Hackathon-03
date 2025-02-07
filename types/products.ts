import { Image } from "sanity";


export interface Product {
    _id: string;
    title: string;
    _type: "document";
    productImage: Image;
    image?: {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    description?: string;
    tags: string;
    dicountPercentage: number;
    isNew: boolean;
    slug: {
        _type: "slug"
        current: string;
    };
    inventory: number;
}