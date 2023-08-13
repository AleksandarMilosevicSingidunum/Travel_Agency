import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DestinationsService } from "../../services/destinations.service";

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent implements OnInit {

  constructor(private destinationsService:DestinationsService) { }

  ngOnInit(): void {
  }

  addDestination()
  {
    
    let name = <HTMLInputElement>document.getElementById("name")
    let details = <HTMLInputElement>document.getElementById("details")
    let price = <HTMLInputElement>document.getElementById("price")
    let img1 = <HTMLInputElement>document.getElementById("image1")
    let file1 : File | null = img1.files != undefined?img1.files[0]:null;
    let img2 = <HTMLInputElement>document.getElementById("image2")
    let file2 : File | null = img2.files != undefined?img2.files[0]:null;
    let img3 = <HTMLInputElement>document.getElementById("image3")
    let file3 : File | null = img3.files != undefined?img3.files[0]:null;
    let description =  <HTMLInputElement>document.getElementById("description")
    let rating = <HTMLInputElement>document.getElementById("rating")
    let tag = <HTMLInputElement>document.getElementById("tags")
    let data = new FormData();
    data.append("name",name.value)
    data.append("details",details.value)
    data.append("price",price.value)
    data.append("img1",file1?file1:'')
    data.append("img2",file2?file2:'')
    data.append("img3",file3?file3:'')
    data.append("description",description.value)
    data.append("rating",rating.value)
    data.append("tag",tag.value)
    this.destinationsService.addDestination(data).subscribe(data=>
      { 
        return console.log(data)
      })

  }
}
