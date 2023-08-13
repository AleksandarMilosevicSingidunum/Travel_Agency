import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { environment } from "../../../environments/environment.dev";
import { BookingsService } from "../../services/bookings.service";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  environment = environment
  constructor(private route: ActivatedRoute, private destinationsService: DestinationsService,private bookingsService:BookingsService) { }
  destinationResult1: any;
  destinationList1: any;
  nop = 0
  totalAmount = 0
  ngOnInit(): void {
    this.getDestinationById();
  }
  
  _id: string = this.route.snapshot.params['_id'];
  
  getDestinationById() {
    this.destinationsService.viewDestinations(this._id).subscribe((data: any) => {
      this.destinationResult1 = data;
      this.destinationList1 = this.destinationResult1.results;
    })
  }

  calculatePrice(nop:HTMLInputElement)
  {
    this.totalAmount = +nop.value*this.destinationList1.price;
  }

  addBooking()
  {
    let destinationid = this._id
    let numberOfPeoples = <HTMLInputElement> document.getElementById("numberOfPeoples")
    let totalPrice = this.totalAmount
    let emailAddress = <HTMLInputElement> document.getElementById("email")

     let data =
     {
      destinationid:destinationid,
      numberOfPeoples:numberOfPeoples.value,
      totalPrice:totalPrice,
      emailAddress:emailAddress.value
     }

     this.bookingsService.addBooking(data).subscribe(data=>
      {
        return console.log(data)
      })
  }


}
