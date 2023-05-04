import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
    username: string;
    password: string;
    accessLevel: string;

    constructor(
        private registrationService: RegistrationService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.username = '';
        this.password = '';
        this.accessLevel = '';
    }

    registrationFormGroup = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    signUp() {
        if (
            this.registrationFormGroup.controls.username.value &&
            this.registrationFormGroup.controls.password.value &&
            this.registrationFormGroup.valid
        ) {
            if (this.username == 'admin') {
                this.accessLevel = 'admin';
            } else {
                this.accessLevel = 'basic';
            }

            
            this.registrationService
                .signup(this.registrationFormGroup.controls.username.value, this.registrationFormGroup.controls.password.value)
                .subscribe({
                    next: (message) => {
                        console.log('registration component signUp: ', message);
                        this.router.navigate(['/login']);
                    },
                    error: (error) => {
                        console.log('registration component signUp error: ', error);
                    },
                });
        }
    }

    ngOnInit(): void {}
}
