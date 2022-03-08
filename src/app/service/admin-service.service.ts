import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  GetAllUsers(): Observable<any> {
    return this.http.get(`https://secureloginsystem.herokuapp.com/api/v1/users/`)
  }
}
