import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean = false
  isAdmin:boolean = false
  userData:any;
  constructor(private Auth:AuthService) { 

  }




  ngOnInit(): void {
    this.Auth.UserDate.subscribe(()=>{
      if(this.Auth.UserDate.getValue() != null)
      {
        this.isLogIn = true ;
        this.userData=this.Auth.UserDate.getValue()
        if(this.userData.data.role === 'admin')
        {
          this.isAdmin = true
        }
        else{
          this.isAdmin = false
        }
      }
      else{
        this.isLogIn = false
  
      }
    })
   
  }



  logOut(){
    this.isLogIn = false
    this.Auth.SignOut()
  }
}
