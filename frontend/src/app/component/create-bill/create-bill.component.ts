import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from 'src/app/service/bill.service';

@Component({
    selector: 'app-create-bill',
    templateUrl: './create-bill.component.html',
    styleUrls: ['./create-bill.component.css'],
})
export class CreateBillComponent implements OnInit {
    name: string;
    comment: string;
    price: string;

    constructor(
        private billService: BillService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.name = '';
        this.comment = '';
        this.price = '';
    }

    billFormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        comment: ['', [Validators.required]],
        price: ['', [Validators.required]],
    });

    createBill() {
        if (
            this.billFormGroup.controls.name.value &&
            this.billFormGroup.controls.comment.value &&
            this.billFormGroup.controls.price.value &&
            this.billFormGroup.valid
        ) {
            this.billService.createbill(
                this.billFormGroup.controls.name.value,
                this.billFormGroup.controls.comment.value,
                this.billFormGroup.controls.price.value
            ).subscribe({
                next: (message) => {
                    console.log('create bill component createBill: ', message);
                    this.router.navigate(['/listBills']);
                },
                error: (error) => {
                    console.log('create bill component createBill error:', error);
                }
            })
        }
    }

    ngOnInit(): void {}
}
