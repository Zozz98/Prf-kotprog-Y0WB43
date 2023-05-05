import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: any = {};

  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  editUserFormGroup = this.formBuilder.group({
    username: [''],
    password: ['']
  })

  ngOnInit(): void {
    this.userService.getCurrentData(this.activatedRoute.snapshot.params['id']).subscribe({
      next:(result) => {
        this.user = result;
        this.editUserFormGroup.patchValue({
          username: this.user.username,
          password: this.user.password
        })
      },
      error: error => console.log('update user component ngOnInit error: ', error)
    })
  }

  updateUser() {
    this.userService.updateuser(this.activatedRoute.snapshot.params['id'], this.editUserFormGroup.value).subscribe({
      next: result => {
        console.log('update user component updateUser: ',result),
        this.router.navigate(['/listUsers'])
      },
      error: error => console.log('update user component updateUser error: ',error)
    })
  }

}
