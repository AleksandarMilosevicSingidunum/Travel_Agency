import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.dev";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DestinationsService {

  constructor(private httpClient:HttpClient) { }


  getDestinations():Observable<any>{
    let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.GET_ALL_DESTINATIONS;
    return this.httpClient.get(url);
  }

  viewDestinations(_id: any):Observable<any>{
    let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.GET_DESTINATIONS+"?destinationid="+_id;
    return this.httpClient.get(url);
  }

  deleteDestination(_id: any){
      let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.DELETE_DESTINATIONS+"?destinationid="+_id;
      return this.httpClient.delete(url);
  }

  searchDestination(keyword: any){
    let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.SEARCH_DESTINATIONS
    return this.httpClient.get(url);
  }
  addDestination(data:FormData)
  {
    let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.POST_DESTINATIONS
    return this.httpClient.post(url,data)
  }
  updateDestination(data:FormData)
  {
    let url = environment.DESTINATION_BASE_URL+environment.DESTINATION.UPDATE_DESTINATIONS
    return this.httpClient.put(url,data)
  }
}
