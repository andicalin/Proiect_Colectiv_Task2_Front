import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserCredentials} from "../../shared/data-type/UserCredentials";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    confirmPassword: ["", [Validators.required]]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public registerUser() {
    const valuesFromForm = this.registerFormGroup.value;
    const userCredentials: UserCredentials = {
      email: valuesFromForm.email!,
      password: valuesFromForm.password!,
    };
    // @ts-ignore
  }

}
