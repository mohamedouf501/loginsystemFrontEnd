import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from './../../../service/admin-service.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



export interface PeriodicElement {
  name: string;
  email: string;
  role: string;
  emailVerified: boolean;
  active: boolean;
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
export class DashboradComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ELEMENT_DATA: PeriodicElement[] = [];
  pagenumber: number = 1;
  counterData: number = 0
  displayedColumns: string[] = ['_id', 'name', 'age', 'email', 'role', 'active', 'emailVerified', 'update', 'delete'];
  dataSource: any = []
  error: string = ''
  isLoading: boolean = false;
  admin: boolean = true
  constructor(private _liveAnnouncer: LiveAnnouncer, private _AdminServiceService: AdminServiceService, private _ActivatedRoute: ActivatedRoute, private _router: Router) { }
  ngOnInit(): void {
    this.isLoading = true;
    this._ActivatedRoute.queryParamMap.subscribe((params) => {
      let query = { ...params.keys, ...params }
      if (params.get('role') == 'admin') {
      this.admin = false
      }
      else{
        this.admin = true

      }
      
      this.Get(query)
    })
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
  public redirectToUpdate = (user: any) => {


    this._AdminServiceService.AddAdmin(user._id).subscribe({
      next: (_res) => {


      },
      error: (err) => {
        this.error = err.message
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        const index = this.dataSource.data.indexOf(user)
        let oldData = this.dataSource.data[index]
        oldData.role = 'admin'
        this.dataSource.data[index] = oldData
        this.dataSource = this.dataSource.data.filter((ele: any) => {
          return ele.role != 'admin'
        })
      }
    })
  }

  public redirectToDelete = (id: string) => {


    this._AdminServiceService.DeleteUser(id).subscribe({
      next: (_res) => {


      },
      error: (err) => {
        this.error = err.message
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        this.dataSource = this.dataSource.data.filter((ele: any) => {
          return ele._id != id
        })
      }
    })

  }



  Get(orderObj: any) {

    this._AdminServiceService.GetAllUsers(orderObj).subscribe({
      next: (res) => {
        this.counterData = res.count
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        this.error = err.message
        console.log(this.error);
        this.isLoading = false;

      },
      complete: () => {
        this.isLoading = false;
        console.log()

      }
    })
  }


  paginatorNextInServer() {
    if (this.counterData < 10) {
      this.pagenumber = this.pagenumber
    }
    else {
      this.pagenumber = this.pagenumber + 1
    } 
    this._ActivatedRoute.queryParamMap.subscribe((params) => {
      this._router.navigate([], {
        queryParams: {
          role: params.get('role'),
          page: this.pagenumber
        },
      })
    })

  }
  paginatorPreviousInServer() {
    if (this.pagenumber <= 1) {
      this.pagenumber = 1
    }
    else {
      this.pagenumber = this.pagenumber - 1
    }
    this._ActivatedRoute.queryParamMap.subscribe((params) => {
      this._router.navigate([], {
        queryParams: {
          role: params.get('role'),
          page: this.pagenumber
        },
      })
    })
  }
}



