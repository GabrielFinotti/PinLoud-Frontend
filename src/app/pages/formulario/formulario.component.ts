import { Component } from '@angular/core';

// Componentes
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormLoginComponent, FormCadastroComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  //Variáveis do componente
  protected formLogin!: boolean;

  constructor() {
    this.formLogin = true;
  }
}
