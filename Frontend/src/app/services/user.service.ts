import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.dev";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  checkIfUserExist(emailAddress: string,password: string):Observable<any>
  {
    let url = environment.USER_BASE_URL+environment.USER.POST_USER;
    return this.httpClient.post(url,{emailAddress:emailAddress,password:password});
  }
}
