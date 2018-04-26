import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthenticationService } from '../_providers/authentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: String;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public authenticationService: AuthenticationService
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  // User login
  login(F: NgForm) {
    // this.loading = true;
    debugger;
    this.authenticationService.login(F.value)
      .subscribe(
      data => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.loading = false;
      });
  }

}
