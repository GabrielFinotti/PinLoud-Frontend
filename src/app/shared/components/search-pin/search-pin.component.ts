import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-pin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-pin.component.html',
  styleUrl: './search-pin.component.scss',
})
export class SearchPinComponent {
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
