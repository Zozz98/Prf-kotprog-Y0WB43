import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username: string;
  password: string;

  constructor(private registrationService: RegistrationService, private formBuilder: FormBuilder, private router: Router ) {
    this.username = '';
    this.password = '';
   }

   registrationFormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
   })

   signUp() {

   }

  ngOnInit(): void {
  }

}
