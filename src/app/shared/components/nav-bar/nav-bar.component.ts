import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  // Variáveis do componente
  protected navItens!: boolean;

  constructor() {
    this.navItens = false;
  }

  // Abrir e fechar a barra de navegação
  public showMenu() {
    if (this.navItens) {
      this.navItens = false;
    } else {
      this.navItens = true;
    }
  }
}
