import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SearchPinComponent } from '../../shared/components/search-pin/search-pin.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, SearchPinComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
