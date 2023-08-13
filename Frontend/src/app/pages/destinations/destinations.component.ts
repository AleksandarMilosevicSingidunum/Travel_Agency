import { Component, Input, OnInit, Output } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { DestinationsService } from "../../services/destinations.service";
import { environment } from "../../../environments/environment.dev";
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  environment = environment
  constructor(private destinationsService: DestinationsService) { }
  destinationResult: any;
  destinationList: Destination[];
  ngOnInit(): void {
    this.getDestinationList();
  }
  getDestinationList() {

    this.destinationsService.getDestinations().subscribe((data: any) => {
      console.log(data)
      this.destinationResult = data;
      this.destinationList = this.destinationResult.results;
    });
   
  }
  tag = ""

  checkTag(dest: Destination)
  {
    if(this.tag == undefined || this.tag === '')
    {
      return true
    }
    return dest.tag.some(t =>{return t === this.tag})
  }
  onSelected(tag: string):void
  {
    this.tag = tag
    console.log(tag)
  }

}