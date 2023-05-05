import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user?: User;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') as unknown as User; 
  }

}
