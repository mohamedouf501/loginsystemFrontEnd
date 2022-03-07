import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @Input()  status!: boolean ;
  @Output() Changestatus = new EventEmitter<boolean>();
  ispassChanged:boolean = false
  constructor(private Auth:AuthService , private router:Router) { }
  ngOnInit(): void {
  }
  error:any;

  close(){
    this.Changestatus.emit(!this.status)
  }
  changePassWordMethod(newPassword:string , password:string){
    this.ispassChanged=true
    const body ={
      newPassword:newPassword,
      password:password
    }
    this.Auth.updateMyPassword(body).subscribe({
      next:(res)=>{
        console.log(res);

        //  localStorage.setItem('token',res.token)
        // this.Auth.setUserData()
      },
      error:(err)=>{
        this.ispassChanged=false
        this.error=err.message
      },
      complete:()=>{
        this.ispassChanged=false
        this.Changestatus.emit(!this.status)
      }
    })
  }
 
}
