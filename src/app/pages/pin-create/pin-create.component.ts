import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PinCreateFormComponent } from '../../components/forms/pin-create-form/pin-create-form.component';

@Component({
  selector: 'app-pin-create',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PinCreateFormComponent],
  templateUrl: './pin-create.component.html',
  styleUrl: './pin-create.component.scss',
})
export class PinCreateComponent {}
