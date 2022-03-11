import { HttpErrorResponse } from '@angular/common/http';
import { AdminServiceService } from './admin-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 

export class ResolverService implements Resolve<any> {

  constructor(private _AdminServiceService:AdminServiceService , private _ActivatedRoute:ActivatedRoute) { }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => error.error);
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
   | Observable<any> | Promise<any>
  {
    let query
    
    this._ActivatedRoute.queryParamMap
    .subscribe((params) => {
      query = { ...params.keys, ...params }
    })
    const Data =  this._AdminServiceService.GetAllUsers(query).pipe(catchError(this.handleError))
     return  Data
  }
}
