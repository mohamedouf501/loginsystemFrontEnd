import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _router:Router) { }
  ngOnInit(): void {
    
  }
  
  resetPageNum()
  {
   
      
    
     
      // this._ActivatedRoute.queryParamMap.subscribe((params) => {
      //   this._router.navigate([], {
      //     queryParams: {
      //       role: params.get('role'),
      //       page: '1'
      //     },
      //   })
      // })








  }
}
