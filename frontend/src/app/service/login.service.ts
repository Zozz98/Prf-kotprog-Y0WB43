import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    
    private serverUrl: string = 'http://localhost:3000';
    
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log('Belep a login servicebe');
        return this.http.post(
            this.serverUrl + '/login',
            {username:username, password:password},
            {withCredentials: true, responseType: 'text', headers: this.headers }
        );
    }

    logout() {
        return this.http.post(
            this.serverUrl + '/logout',
            {},
            {withCredentials: true, responseType: 'text'}
        );
    }
}
