import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class LoginFormComponent implements OnInit {
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

  ngOnInit(): void {
    this.verifyToken();
  }

  private verifyToken() {
    if (typeof window !== 'undefined') {
      const getToken = sessionStorage.getItem('token');

      if (getToken !== null) {
        this.router.navigateByUrl('/pins');
      }
    }
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
          this.setUserCredentiais(res.access);
          window.location.reload();
        },
        (err) => {
          alert(
            'Não foi possível se conectar, verifique os dados e tente novamente!'
          );
        }
      );
    }
  }

  private setUserCredentiais(token: string) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', token);
    }
  }
}
