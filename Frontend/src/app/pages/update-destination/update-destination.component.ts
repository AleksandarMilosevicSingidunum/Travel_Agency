import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { environment } from "../../../environments/environment.dev";
@Component({
  selector: 'app-update-destination',
  templateUrl: './update-destination.component.html',
  styleUrls: ['./update-destination.component.css']
})
export class UpdateDestinationComponent implements OnInit {

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
      let nameInput = <HTMLInputElement> document.getElementById("name")
      nameInput.value = this.destinationList1.name;
      let detailsInput = <HTMLInputElement> document.getElementById("details")
      detailsInput.value = this.destinationList1.details;
      let priceInput = <HTMLInputElement> document.getElementById("price")
      priceInput.value = this.destinationList1.price;
      let descriptionInput = <HTMLInputElement> document.getElementById("description")
      descriptionInput.value = this.destinationList1.description;
      let ratingInput = <HTMLInputElement> document.getElementById("rating")
      ratingInput.value = this.destinationList1.rating;
      let tagsInput = <HTMLInputElement> document.getElementById("tags")
      tagsInput.value = this.destinationList1.tag;
    })
  }
  updateDestinations(){
    let destinationid =this.route.snapshot.params['_id'];
    let name = <HTMLInputElement>document.getElementById("name")
    let details = <HTMLInputElement>document.getElementById("details")
    let price = <HTMLInputElement>document.getElementById("price")
    let description =  <HTMLInputElement>document.getElementById("description")
    let rating = <HTMLInputElement>document.getElementById("rating")
    let tag = <HTMLInputElement>document.getElementById("tags")
    let data = new FormData();
    data.append("destinationid",destinationid)
    data.append("name",name.value)
    data.append("details",details.value)
    data.append("price",price.value)
    data.append("description",description.value)
    data.append("rating",rating.value)
    data.append("tag",tag.value)
    this.destinationsService.updateDestination(data).subscribe(data=>
      { 
        return console.log(data)
      })

    
    
    }
    
  


}
