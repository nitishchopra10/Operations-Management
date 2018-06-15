import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data-service.service';
import { Credentials } from '../models/credentials';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { INVALID } from '@angular/forms/src/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Credentials = null;
  invalid_login: boolean= false;
  LoginForm;
  token: string;
  constructor(private http: DataService,private router:Router) { }

  changeValid(){
    this.invalid_login = false;
  }
  ngOnInit() {
    this.LoginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onLogin(data: Credentials) {
    const body = {
      username: data.username,
      password: data.password
    }
    this.http.post("/authenticate/login", body).subscribe(response => {
      this.token = response.text();
      console.log(this.token);
      if (this.token == "INVALID_CREDENTIALS") {
        this.invalid_login = true;
      }
      else {
        this.invalid_login = false;
        console.log(this.token);
        sessionStorage.setItem("token", this.token);
        this.router.navigate(['/home']);
      }
    })

  }
}
