import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private serverUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    listusers(): Observable<User[]> {
        return this.http.get<User[]>(this.serverUrl + '/listUsers', {
            headers: this.headers,
            withCredentials: true,
        });
    }

    updateuser(id: string, data:any) {
      return this.http.put(this.serverUrl+`/updateUser/${id}`,data, {
        headers:this.headers,
        withCredentials:true,
        })
    }

    deleteuser(id: string) {
      return this.http.delete(this.serverUrl+`/deleteBill/${id}`, {
        headers:this.headers,
        withCredentials:true
      })
    }

    getCurrentData(id: string) {
      return this.http.get(this.serverUrl+`/updateUser/${id}`)
  }
}
