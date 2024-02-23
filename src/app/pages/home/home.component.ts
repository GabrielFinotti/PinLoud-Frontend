import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected pinSearch!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pinSearch = this.formBuilder.group({
      pin: [''],
    });
  }

  public getPin() {
    console.log(this.pinSearch.value['pin']);
    this.pinSearch.reset();
  }
}
