import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-pin-create',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pin-create.component.html',
  styleUrl: './pin-create.component.scss'
})
export class PinCreateComponent {

}
