import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/Bill';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BillService } from 'src/app/service/bill.service';
@Component({
    selector: 'app-list-bills',
    templateUrl: './list-bills.component.html',
    styleUrls: ['./list-bills.component.css'],
})
export class ListBillsComponent implements OnInit {
    bills: Bill[] = [];
    tableHeaders = ['#', 'name', 'comment', 'price'];

    constructor(
        private router: Router,
        private http: HttpClient,
        private billService: BillService
    ) {}

    ngOnInit(): void {
        this.billService.listbills().subscribe({
            next: (data) => {
                (this.bills = data),
                    console.log('list bills component ngOnInit:', data);
            },
            error: (error) =>
                console.log('list bills component ngOnInit error:', error),
        });
    }
}
