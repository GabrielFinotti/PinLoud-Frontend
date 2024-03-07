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
import { Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router
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
        (res) => {
          alert('Seja bem vindo(a)!');
          this.setUserCredentiais(res.access, 1);
          this.router.navigateByUrl('/pins');
        },
        (err) => {
          alert(
            'Não foi possível se conectar, verifique os dados e tente novamente!'
          );
        }
      );
    }
  }

  private setUserCredentiais(token: string, id: number) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('id', id.toString());
    }
  }
}
