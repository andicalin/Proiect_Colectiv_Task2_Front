import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginFormGroup = this.formBuilder.group({
    email: ["", [Validators.required,
      Validators.pattern("^[a-z]+\\.[a-z]+@(stud.){0,1}(ubbcluj.ro){1}$")]],
    password: ["", [Validators.required,
      //at least one upper case English letter, one lower case English letter, one digit, and one special character ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$
      Validators.pattern("^(?=.*?[A-Z])[a-z]*(?=.*?[0-9])[#?!@$%^&*-]*.{5,}$")]],
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  get email() {
    return this._loginFormGroup.get('email')
  }
  get password() {
    return this._loginFormGroup.get('password')
  }

  get loginFormGroup(): FormGroup {
    return this._loginFormGroup;
  }

  public loginUser() {
    const valuesFromForm = this._loginFormGroup.value;
    const userCredentials: {  email: any, password: any; } = {
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
    console.log(this.loginFormGroup.value);
    const userCredentials: { password: any; email: any } = {
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
