import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  // Variáveis do componente
  protected navItens!: boolean;
  protected display!: Record<string, string>;

  constructor() {
    this.navItens = false;
  }

  // Abrir e fechar a barra de navegação
  public showMenu() {
    if (this.navItens) {
      this.navItens = false;
      this.display = {
        display: 'none',
      };
    } else {
      this.navItens = true;
      this.display = {
        display: 'block',
      };
    }
  }
}
