import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BillService } from 'src/app/service/bill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {

   bill: any = {};
  
  constructor(private billService: BillService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

  editBillFormGroup = this.formBuilder.group({
    name: [''],
    comment: [''],
    price: ['']
  })

  ngOnInit(): void {
    this.billService.getCurrentData(this.activatedRoute.snapshot.params['id']).subscribe({
      next:(result) => {
        this.bill = result
        this.editBillFormGroup.patchValue({
          name: this.bill.name,
          comment:this.bill.comment,
          price: this.bill.price
        })
      },
      error: error => console.log('update bill ngOnInit error: ',error)
    })
  }

  updateBill() {
    this.billService.updatebill(this.activatedRoute.snapshot.params['id'],this.editBillFormGroup.value).subscribe({
      next: result => {
        console.log('update bill component updateBill: ',result),
        this.router.navigate(['/listBills'])
      },
      error: error => {
        console.log('update bill component updateBill error: ',error)
      }
    })
  }

}
