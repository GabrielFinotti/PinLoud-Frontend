import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  public registerForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formbuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(18),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      confPassword: ['', Validators.required],
    });
  }

  protected sendUserData() {
    if (
      this.registerForm.valid &&
      this.registerForm.value['password'] ===
        this.registerForm.value['confPassword']
    ) {
      const userData = {
        username: this.registerForm.value['username'],
        email: this.registerForm.value['email'],
        password: this.registerForm.value['password'],
      };

      this.userService.userRegister(userData).subscribe(
        (res) => console.log(res),
        (err) => err
      );

      this.registerForm.reset();
    }
  }
}
