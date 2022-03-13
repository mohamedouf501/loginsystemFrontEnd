import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  error: string = '';
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  signUpForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(11),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(80),
    ]),
  });

  submitSignUpForm(signUpForm: FormGroup) {
    this.Auth.signUp(signUpForm.value).subscribe(
      {
        next:(response) => {
      
        },
       error: (err) => {
  
       this.error = err.message
  
        },
        complete:() => {
          
          this.router.navigate(['/signin'])
        }
      }
    );
  }
}

