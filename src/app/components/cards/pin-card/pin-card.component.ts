import { Component, OnInit } from '@angular/core';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { PinList } from '../../../interfaces/pins/pin-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin-card',
  standalone: true,
  imports: [],
  templateUrl: './pin-card.component.html',
  styleUrl: './pin-card.component.scss',
})
export class PinCardComponent implements OnInit {
  protected pinList!: PinList[];

  constructor(private pinsService: PinsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPins();
  }

  protected getAllPins() {
    this.pinsService.getPinsList().subscribe(
      (res) => {
        this.pinList = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  protected sendPinId(id: number) {
    this.router.navigate(['pins/view/', id]);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 10);
  }
}
