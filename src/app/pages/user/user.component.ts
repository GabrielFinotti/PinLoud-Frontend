import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UserPinCardComponent } from '../../components/cards/user-pin-card/user-pin-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FooterComponent, UserPinCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
