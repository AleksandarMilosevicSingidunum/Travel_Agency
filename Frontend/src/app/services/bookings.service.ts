import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.dev";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private httpClient:HttpClient) { }

  getBookings():Observable<any>{
    let url = environment.BOOKING_BASE_URL+environment.BOOKING.GET_ALL_BOOKINGS
    return this.httpClient.get(url);
  }
  addBooking(data:any)
  {
    let url = environment.BOOKING_BASE_URL+environment.BOOKING.NEW_BOOKING
    return this.httpClient.post(url,data)
  }
}
