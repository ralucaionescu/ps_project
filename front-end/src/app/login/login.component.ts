import { Route } from '@angular/compiler/src/core';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = false;

  user = new User();

  msg = ""
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private service: RegistrationService, private route: Router) { }

  loginUser() {

    this.service.loginUserFromRemote(this.user).subscribe(
      response => {
        console.log("succes")
        this.route.navigate(['/pets']);

      },
      error => {
        console.log("exception occured")
        this.msg = "Email or password is incorrect";
      }
    )
  }
}
export class FormFieldPrefixSuffixExample {
  hide = true;
}
export class FormFieldHintExample { }
