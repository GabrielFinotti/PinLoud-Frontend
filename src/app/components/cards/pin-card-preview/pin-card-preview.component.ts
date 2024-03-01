import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { PinAllData } from '../../../interfaces/pin-all-data';

@Component({
  selector: 'app-pin-card-preview',
  standalone: true,
  imports: [],
  templateUrl: './pin-card-preview.component.html',
  styleUrl: './pin-card-preview.component.scss',
})
export class PinCardPreviewComponent implements OnChanges {
  @Input() public id!: number;
  protected pinData!: PinAllData;

  constructor(private pinsService: PinsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'].previousValue !== changes['id'].currentValue) {
      this.getDataPin(this.id);
    }
  }

  private getDataPin(id: number) {
    this.pinsService.getPinAllData(id).subscribe(
      (res) => (this.pinData = res),
      (err) => err
    );
  }
}
