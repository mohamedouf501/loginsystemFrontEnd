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
export class DashboradComponent implements   AfterViewInit  , OnInit{
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = [ '_id', 'name', 'age' , 'email', 'role', 'active','emailVerified', 'update', 'delete'];
  dataSource: any;
  error:string=''

  constructor(private _liveAnnouncer: LiveAnnouncer , private _AdminServiceService:AdminServiceService) {}
  ngOnInit(): void {
    this.getusers()


  }

  @ViewChild(MatSort) sort!: MatSort 

  ngAfterViewInit() {

  }

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
      console.log(id)
  }
  public redirectToDelete = (id: string) => {
    console.log(id)

  }
  
  getusers(){
    this._AdminServiceService.GetAllUsers().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;

      },
      error:(err)=>{
        this.error=err.message
      },
      complete:()=>{
        console.log("done")
    
      }
    })
  }

}

