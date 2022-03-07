import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-change-age',
  templateUrl: './change-age.component.html',
  styleUrls: ['./change-age.component.css']
})
export class ChangeAgeComponent implements OnInit {

  @Input()  status!: boolean ;
  @Output() Changestatus = new EventEmitter<boolean>();
  @Output() NewAge = new EventEmitter<string>();
  isageChanged:boolean = false
  constructor(private Auth:AuthService , private router:Router) { }
  ngOnInit(): void {
  }
  error:any;

  close(){
    this.Changestatus.emit(!this.status)
  }
  changeAgeMethod(age:any){
    this.isageChanged=true

    const newAge ={
      age :age
    }

    this.Auth.UpdateMe(newAge).subscribe({
      next:(res)=>{
        this.NewAge.emit(newAge.age)
        sessionStorage.setItem('newAgeChanged' ,  newAge.age)
      },
      error:(err)=>{
        this.isageChanged=false
        this.error=err.message
      },
      complete:()=>{
        this.isageChanged=false
        this.Changestatus.emit(!this.status)
      }
    })
  }
 
}
