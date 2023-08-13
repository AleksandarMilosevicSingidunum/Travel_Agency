import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { environment } from "../../../environments/environment.dev";
@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css']
})
export class DestinationPageComponent implements OnInit {
  environment = environment
  constructor(private route: ActivatedRoute, private destinationsService: DestinationsService) { }
  destinationResult1: any;
  destinationList1: any;
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





}
