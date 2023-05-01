import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private serverUrl:string  = 'http://localhost';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.serverUrl+'/login', {username: username,password: password}, {responseType: 'text'});
  }

  logout() {
    return this.http.post(this.serverUrl+'/logout', {}, {withCredentials: true, responseType: 'text'});
  }
}
