import { Component, OnInit } from '@angular/core';
import {User} from '../../model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  tableHeaders = ['#','Username','Password','Action'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.listusers().subscribe({
      next: data => {
        this.users = data,
        console.log('list users component ngOnInit: ', data)
      },
      error: error => console.log('list users component ngOnInit error: ',error)
    })
  }

  deleteUser(id:string) {
    this.userService.deleteuser(id).subscribe({
      next: result => {
        console.log('list bills component deleteUser: ',result)
        this.fetchUsers();
      },
      error: error => console.log('list bills component deleteUser error: ',error)
    })
  }

}
