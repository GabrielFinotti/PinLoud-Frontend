import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent {
  // Variáveis do componente.
  protected formCadastro!: FormGroup;
  

  constructor(private formBuilder: FormBuilder) {
    // Contrução do formulário e suas validações.
    this.formCadastro = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ],
      ],
      confPassword: ['', Validators.required],
    });
  }

  // Método de envio do formulário de cadastro
  protected submitCadastro() {}
}
