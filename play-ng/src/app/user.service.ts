import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://127.0.0.1:8989/user';

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.userUrl);
  	// return of(user_data);
  }
}
