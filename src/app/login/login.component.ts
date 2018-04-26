import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  login(value) {
    // this.loading = true;
    this.authenticationService.login(value)
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
