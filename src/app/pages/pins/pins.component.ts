import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SearchPinComponent } from '../../shared/components/search-pin/search-pin.component';

@Component({
  selector: 'app-pins',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SearchPinComponent],
  templateUrl: './pins.component.html',
  styleUrl: './pins.component.scss',
})
export class PinsComponent {}
