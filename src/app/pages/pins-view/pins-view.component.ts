import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PinCardPreviewComponent } from '../../components/cards/pin-card-preview/pin-card-preview.component';
import { PinCardComponent } from '../../components/cards/pin-card/pin-card.component';

@Component({
  selector: 'app-pins-view',
  standalone: true,
  imports: [FooterComponent, PinCardPreviewComponent, PinCardComponent],
  templateUrl: './pins-view.component.html',
  styleUrl: './pins-view.component.scss',
})
export class PinsViewComponent {}
