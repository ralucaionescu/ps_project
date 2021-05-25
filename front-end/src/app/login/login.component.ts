
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacadeService } from '../services/facade.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email = new FormControl('', [Validators.required, Validators.email]);
  hide = false;
  user = new User();
  msg = "success"

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private service: FacadeService, private route: Router) { }

  loginUser() {

    this.service.login(this.user)
      .subscribe((res: any) => {
        this.user = res;
        this.service.setUserSession(res);
        this.service.loggedIn.next(this.service.isSetUserSession());
        this.service.currentUser = res;

        this.msg = "success";
        this.route.navigate(["/"]).then(() => {
          window.location.reload();
        });
      },
        (err => {
          this.msg = "Please enter a correct username and password";
          console.log("error");
        })

      );

  }

  register() {

    this.route.navigate(["/register"]);
  }

}
export class FormFieldPrefixSuffixExample {
  hide = true;
}
export class FormFieldHintExample { }
