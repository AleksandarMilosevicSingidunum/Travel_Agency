export class Destination {
    _id: string;
    name: { type: string, unique: true };
    description: string;
    details: string;
    price: number;
    img1: string;
    img2: string;
    img3: string;
    rating:number;
    tag:string[];
}