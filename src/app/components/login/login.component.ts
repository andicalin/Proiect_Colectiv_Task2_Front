import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserCredentials} from "../../shared/data-type/UserCredentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public loginUser() {
    const valuesFromForm = this.loginFormGroup.value;
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!,
    };
    // @ts-ignore
    if (this.getPasswordErrorMessage() == "" && this.getEmailErrorMessage() == "") {
      this.userService.loginUser(userCredentials).subscribe({
        next: response => {
        },
        error: err => {
        }
      });
    }
  }

  public forgotPassword() {
    const valuesFromForm = this.loginFormGroup.value;
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!,
    };
    // @ts-ignore
    if (this.getPasswordErrorMessage() == "" && this.getEmailErrorMessage() == "") {
      this.userService.forgotPassword(userCredentials).subscribe({
        next: response => {
        },
        error: err => {
        }
      });
    }
  }

}
