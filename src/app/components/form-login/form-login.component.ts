import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  //Variáveis do Componente.
  protected formLogin!: FormGroup;
  protected typeInput!: string;

  constructor(private formBuilder: FormBuilder) {
    // Construindo o formulário de login.
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.typeInput = 'password';
  }

  // Método de envio do formulário de login.
  protected submitLogin() {}
}
