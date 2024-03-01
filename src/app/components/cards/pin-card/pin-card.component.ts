import { Component, OnInit } from '@angular/core';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { PinList } from '../../../interfaces/pin-list';

@Component({
  selector: 'app-pin-card',
  standalone: true,
  imports: [],
  templateUrl: './pin-card.component.html',
  styleUrl: './pin-card.component.scss',
})
export class PinCardComponent implements OnInit {
  protected pinList!: PinList[];

  constructor(private pinsService: PinsService) {}

  ngOnInit(): void {
    this.getAllPins();
  }

  protected getAllPins() {
    this.pinsService.getPinsList().subscribe(
      (res) => {
        this.pinList = res;
        console.log(this.pinList);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
