import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from './../../../service/admin-service.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  email:string;
  role:string;
  emailVerified:boolean;
  active:boolean;
  position: number;
  _id: string;
  age: number;
}
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements  OnInit{
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = [ '_id', 'name', 'age' , 'email', 'role', 'active','emailVerified', 'update', 'delete'];
  dataSource: any;
  error:string=''
  isLoading: boolean = false;
  constructor(private _liveAnnouncer: LiveAnnouncer , private _AdminServiceService:AdminServiceService , private _ActivatedRoute :ActivatedRoute, private _router:Router) {}
  ngOnInit(): void { 
    this.isLoading = true;
 
    this._AdminServiceService.GetAllUsers().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        console.log(this.sort)

      },
      error:(err)=>{
        this.error=err.message
        console.log(this.error);
        this.isLoading = false;

      },
      complete:()=>{
        console.log("done")
        this.isLoading = false;

      }
    })
    this.Get()
  }

  @ViewChild(MatSort) sort!: MatSort 



  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
   doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  public redirectToUpdate = (id: string) => {
    this._router.navigate
  }
  public redirectToDelete = (id: string) => {
    console.log(id)

  }
  
  Get()
  {
    this._ActivatedRoute.data.subscribe({
      next:(res)=>{
        const data =res['users'].data
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        this.error=err.message
        console.log(this.error);

      },
      complete:()=>{
        console.log("done")
      }
    })
  }
 

}

