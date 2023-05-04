import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService, private formBuilder:FormBuilder, private router: Router) { 
    this.username = '';
    this.password = '';
  }

  loginFormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  })

  logIn() {
    if(this.loginFormGroup.controls.username.value &&
      this.loginFormGroup.controls.password.value &&
      this.loginFormGroup.valid) {
        this.loginService.login(this.username,this.password).subscribe({
          next:(message) => {
            console.log('Belep a login componentbe')
            console.log("login component login: ", message)
            localStorage.setItem('user', this.username)
            this.router.navigate(['/home'])
          },
          error: error => console.log("login component login error: ",error)
        })
      }
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService.logout().subscribe({
        next: message => console.log('login component ngOnInit logout: ', message),
        error: error => console.log('login component ngOnInit logout error: ',error)
      })
    }
  }

}
