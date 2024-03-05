import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserLogin } from '../../../interfaces/user/user-login';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  protected loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  protected getUserLogin() {
    if (this.loginForm.valid) {
      const userData: UserLogin = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      };

      this.userService.userLogin(userData).subscribe(
        (res) => console.log(res),
        (err) => err
      );
    }
  }
}
