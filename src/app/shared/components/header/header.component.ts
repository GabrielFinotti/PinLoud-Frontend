import { Component, DoCheck } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements DoCheck {
  protected userLogin!: boolean;
  protected id!: number;

  constructor() {
    this.userLogin = true;
  }

  ngDoCheck(): void {
    this.verifyUserId();
  }

  protected verifyUserId() {
    if (typeof window !== 'undefined') {
      const verifyId = sessionStorage.getItem('id');

      if (verifyId !== null) {
        this.id = parseInt(verifyId);
        this.userLogin = false;
      } else {
        this.userLogin = true;
      }
    }
  }
}
