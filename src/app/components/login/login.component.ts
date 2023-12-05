import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  constructor( private authService: AuthService, private tokenService: TokenService, private router: Router, private accountService: AccountService){}
  ngOnInit(): void {
  }

  login() {
    const formValue = this.loginForm.value;

    if (formValue.email !== null && formValue.password !== null) {
      const loginData = {
        email: formValue.email || '', // Use logical OR operator to provide a default empty string value
        password: formValue.password || '',
      };

      this.authService.login(loginData).subscribe(res => this.handleResponse(res));
    } else {
      console.error('Email or password is missing.');
    }
  }

  handleResponse(res: any){
    this.tokenService.handle(res);
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/shipment");
  }



}
