import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserCredentials} from "../../shared/data-type/UserCredentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() clickCreate = new EventEmitter<JSON>();

  loginFormGroup = this.formBuilder.group({
    email: [""],
    password: [""]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public loginUser() {
    const valuesFromForm = this.loginFormGroup.value;
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!
    };
    this.userService.loginUser(userCredentials).subscribe({
      next: response => {
        //TODO: send credentials to next page
        console.log(valuesFromForm.email + " " + valuesFromForm.password)
      },
      error: err => {
        //TODO : error dialog box/snack bar user does not exist
        console.log(valuesFromForm.email + " " + valuesFromForm.password)
      }
    });
  }


  public forgotPassword() {
    const valuesFromForm = this.loginFormGroup.value;
    console.log(this.loginFormGroup.value);
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!
    };
    // @ts-ignore
    this.userService.forgotPassword(userCredentials.email).subscribe({
      next: response => {
        console.log(valuesFromForm.email + " " + valuesFromForm.password)
      },
      error: err => {
        //TODO: create dialog boxes with email not valid for
        console.log(valuesFromForm.email + valuesFromForm.password)
      }
    });
  }

}
