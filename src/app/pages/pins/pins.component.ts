import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SearchPinComponent } from '../../shared/components/search-pin/search-pin.component';
import { PinCardComponent } from '../../components/cards/pin-card/pin-card.component';

@Component({
  selector: 'app-pins',
  standalone: true,
  imports: [FooterComponent, SearchPinComponent, PinCardComponent],
  templateUrl: './pins.component.html',
  styleUrl: './pins.component.scss',
})
export class PinsComponent {}
