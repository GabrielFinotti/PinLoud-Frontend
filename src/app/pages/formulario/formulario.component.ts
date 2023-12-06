import { Component } from '@angular/core';

// Componentes
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { FormCadastroComponent } from '../../components/form-cadastro/form-cadastro.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormLoginComponent,
    FormCadastroComponent,
    NavBarComponent,
    FooterComponent,
  ],
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
