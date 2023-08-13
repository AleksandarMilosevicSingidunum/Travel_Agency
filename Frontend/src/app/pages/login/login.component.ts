import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,private router:Router) { }
  ngOnInit(): void {
  }
  loginUser()
  {
    let emailAddress = <HTMLInputElement>document.getElementById("Email")
    let password = <HTMLInputElement>document.getElementById("password")
    this.userService.checkIfUserExist(emailAddress.value,password.value).subscribe(data =>
      { 
        console.log(data.status)
        console.log(emailAddress.value,password.value)
          if(data.status == "200")
          {
            this.router.navigateByUrl("/admin-page")
          }
          else{
            alert("Wrong Email or password")
          }
      })
  }

}
  

