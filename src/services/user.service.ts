import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) {}

  register({ email, password }: any){
    return this.http.get('https://reqres.in/api/register' + 'user', { responseType: 'text' });
  }


}

