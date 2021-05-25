import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacadeService } from '../services/facade.service';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
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
  constructor(private service: FacadeService, private route: Router) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUpUser() {
    this.service.signUpUser(this.user);
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  login() {
    this.route.navigate([""]);
  }


}
export class FormFieldPrefixSuffixExample {
  hide = true;
}
export class FormFieldHintExample { }
