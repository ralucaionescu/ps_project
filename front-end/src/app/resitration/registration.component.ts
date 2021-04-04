import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = false;
  user = new User();
  msg = ""
  constructor(private service: RegistrationService, private route: Router) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUpUser() {
    this.service.signUpUser(this.user).subscribe(
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
