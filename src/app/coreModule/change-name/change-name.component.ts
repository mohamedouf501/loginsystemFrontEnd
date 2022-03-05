import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent implements OnInit {
  @Input()  status!: boolean ;
  @Output() Changestatus = new EventEmitter<boolean>();
  @Output() NewName = new EventEmitter<string>();
  isChanged:boolean = false
  newData:any;
  constructor(private Auth:AuthService , private router:Router) { }
  ngOnInit(): void {
  }
  error:any;
  changeNameMethod(name:string)
  {     
      this.isChanged=true

    const newName ={
      name :name
    }
    this.Auth.UpdateMe(newName).subscribe({
      next:(res)=>{
        this.NewName.emit(newName.name)
        localStorage.setItem('newNameChanged' , newName.name)
      },
      error:(err)=>{
        this.isChanged=false
        this.error=err.message
      },
      complete:()=>{
        this.isChanged=false
        
        this.Changestatus.emit(!this.status)
      }
    })
  }
  close(){
    this.Changestatus.emit(!this.status)
  }
}
