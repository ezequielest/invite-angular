import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './services/login.service';
import { login } from '../models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  thereIsLoginError = false;

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe((res: login) => {
      if (res.error) {
        this.thereIsLoginError = true;
      } else {
        localStorage.setItem('token',res.token);
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 1000);
        
      }
    });
  }

}
