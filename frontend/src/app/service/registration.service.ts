import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private serverUrl:string  = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  signup() {
    //return this.http.post(this.serverUrl+'/registration')
  }
}
