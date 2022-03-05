import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  error: string = '';
  userDate: any = {};
  isLoading: boolean = false;
  sub: any;
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  signINForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  submitSignINForm(signUpForm: FormGroup) {
    this.isLoading = true;
    this.sub = this.Auth.signIN(signUpForm.value).subscribe(
      (response) => {
          localStorage.setItem('token' , response.token)
          this.Auth.setUserData()
          this.userDate = response.data
      },
      (err) => {
        this.isLoading = false;
        this.error = err.message
      },
      () => {
        this.router.navigate([`/home`])
        this.isLoading = false;
      }
    );
  }
  
  ngOnDestroy(): void {

   
  }

  
}
