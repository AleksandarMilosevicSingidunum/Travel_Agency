import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { DestinationsService } from 'src/app/services/destinations.service';
import { environment } from "../../../environments/environment.dev";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  environment = environment
  constructor(private destinationsService: DestinationsService) { }
  destinationResult: any;
  destinationList: any;
  id: any;
  ngOnInit(): void {
    this.getDestinationList();
  }

  
  getDestinationList() {

    this.destinationsService.getDestinations().subscribe((data: any) => {
      this.destinationResult = data;
      this.destinationList = this.destinationResult.results;
    });

  }

  onSelectedDelete(dl:Destination):void
  {
    this.id = dl._id
    console.log(this.id)
    this.DeleteDestinationById(this.id);
    location.reload();
  }
  onSelectedUpdate(dl:Destination):void
  {
    this.id = dl._id
    console.log(this.id)
  }

  DeleteDestinationById(id: any) {
    this.destinationsService.deleteDestination(this.id).subscribe((data: any) => {
      this.destinationResult = data;
      this.destinationList = this.destinationResult.results;
    })
  }
}
