import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any
  password:any
  invalidLogin=false
  errorMessage="Invalid Credential"

  constructor(private router:Router,
    public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {}
  
  handleLogin(){
    console.log(this.username)
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password))
    {this.invalidLogin=false
      this.router.navigate(['welcome'])
    }
    else
    {
    this.invalidLogin=true
    }
  }
  }



