import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SearchPinComponent } from '../../shared/components/search-pin/search-pin.component';

@Component({
  selector: 'app-pins',
  standalone: true,
  imports: [FooterComponent, SearchPinComponent],
  templateUrl: './pins.component.html',
  styleUrl: './pins.component.scss',
})
export class PinsComponent {}
