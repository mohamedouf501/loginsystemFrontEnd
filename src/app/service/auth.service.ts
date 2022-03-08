import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserDate = new BehaviorSubject(null);
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

  setUserData() {
    const token = localStorage.getItem('token');
    let encodedData = JSON.stringify(token);
    this.UserDate.next(jwtDecode(encodedData));
  }

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token') != null) {
      this.setUserData();
    }
  }

  signUp(user: object): Observable<any> {
    return this.http
      .post(`https://secureloginsystem.herokuapp.com/api/v1/users/signup`, user)
      .pipe(catchError(this.handleError));
  }
  signIN(user: object): Observable<any> {
    return this.http
      .post(`https://secureloginsystem.herokuapp.com/api/v1/users/login`, user)
      .pipe(catchError(this.handleError));
  }
  SignOut() {
    localStorage.removeItem('token')
    
    this.UserDate.next(null);
    this.router.navigate(['/signin']);
  }
  
  UpdateMe(data:object): Observable<any> {
    return this.http.patch(`https://secureloginsystem.herokuapp.com/api/v1/users/updateMe`,data).pipe(catchError(this.handleError));
  }
  updateMyPassword(data:object): Observable<any> {
    return this.http.patch(`https://secureloginsystem.herokuapp.com/api/v1/users/updateMyPassword`,data).pipe(catchError(this.handleError));
  }
  forgotPassword(data:object): Observable<any> 
  {
    return this.http.post(`https://secureloginsystem.herokuapp.com/api/v1/users/forgotPassword`,data).pipe(catchError(this.handleError));
  }
resetPassword(data:any): Observable<any> 
  { 
    let body = {
      password : data.password
    }
    return this.http.patch(`https://secureloginsystem.herokuapp.com/api/v1/users/resetPassword/${data.token}`,body).pipe(catchError(this.handleError));
  }
}


