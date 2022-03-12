import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  GetAllUsers(query:any): Observable<any> {    
    const options = query ? { params: new HttpParams()
      .set(query[0], query.params.role  )
      .set(query[1], query.params.page)    
    } : {};

    return this.http.get(`https://secureloginsystem.herokuapp.com/api/v1/users/` , options)
  }

  DeleteUser(_id:string) : Observable<any> {
    return this.http.delete( `https://secureloginsystem.herokuapp.com/api/v1/users/${_id} `)
    
  }
  AddAdmin(_id:string) :Observable<any> {

    return this.http.patch(`https://secureloginsystem.herokuapp.com/api/v1/users/${_id}` ,null)

  }
}
