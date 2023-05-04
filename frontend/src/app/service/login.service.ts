import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private serverUrl: string = 'http://localhost:4200';

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log('Belep a login servicebe');
        return this.http.post(
            this.serverUrl + '/login',
            { username: username, password: password },
            { responseType: 'text' }
        );
    }

    logout() {
        return this.http.post(
            this.serverUrl + '/logout',
            {},
            { withCredentials: true, responseType: 'text' }
        );
    }
}
