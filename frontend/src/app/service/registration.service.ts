import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    private serverUrl: string = 'http://localhost:3000';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {}

    signup(username: string, password: string) {
        
        return this.http.post(
            this.serverUrl + '/registration',
            { username:username, password:password },
            {
                responseType: 'text',
                withCredentials: true,
                headers: this.headers,
            }
        );
    }
}
