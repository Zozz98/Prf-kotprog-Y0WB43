import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Bill} from '../model/Bill';

@Injectable({
    providedIn: 'root',
})
export class BillService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private serverUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    createbill(name: string, comment: string, price: string) {
        return this.http.post(
            this.serverUrl + '/createBill',
            {
                name:name,
                comment:comment,
                price:price,
            },
            {
                responseType: 'text',
                withCredentials: true,
                headers: this.headers,
            }
        );
    }

    listbills(): Observable<Bill[]> {
        return this.http.get<Bill[]>(this.serverUrl+'/listBills', {
            headers: this.headers,
            withCredentials:true
        })
    }

    updatebill(id:string) {

    }

    deletebill(id:string) {
        
    }

    
}
