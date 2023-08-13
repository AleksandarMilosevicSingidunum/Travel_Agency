import { Component, Input, OnInit } from '@angular/core';
import { DestinationsService } from "../../services/destinations.service";
import { Destination } from "../../models/destination.model";
import { environment } from "../../../environments/environment.dev";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  environment = environment
  constructor(private destinationsService: DestinationsService)   { 
  } 
  destinationResult: any;
  destinationList: any;
  ngOnInit(): void {
    this.getDestinationList();
  }
  getDestinationList(){
    this.destinationsService.getDestinations().subscribe((data: any)=>{
      this.destinationResult = data;
      this.destinationList = this.destinationResult.results;

      this.destinationList.sort((a:Destination,b:Destination)=> {
        return b.rating-a.rating
      })
    });
  };

  
}
