import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  find:boolean=true
  Reset:boolean=false
  error:string=''
  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword(email:string){
   let  body ={
      email:email
    }
    this.Auth.forgotPassword(body).subscribe({
      next:(res)=>{
        console.log(res)
      },

      error:(err)=>{
        this.error=err.message

      },

      complete:()=>{
         this.find = !this.find
        this.Reset = !this.Reset
      }
    })
   
    
  }

}
