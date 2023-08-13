import { Destination } from "../models/destination.model";


export class Reservation{
    constructor(public destination:Destination){}
        
    days:number = 1;
    people:number = 1;
    price:number = this.destination.price;
    
}