import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { RegisterFormComponent } from '../../components/forms/register-form/register-form.component';
import { LoginFormComponent } from '../../components/forms/login-form/login-form.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    LoginFormComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  public FormToggle!: boolean;

  constructor() {
    this.FormToggle = true;
  }

  public onToggleForm() {
    if (this.FormToggle) {
      this.FormToggle = false;
    } else {
      this.FormToggle = true;
    }
  }
}
