import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})
export class ListBillsComponent implements OnInit {

  tableHeaders = ['#','name','comment','price']

  constructor() { }

  ngOnInit(): void {
  }

}
