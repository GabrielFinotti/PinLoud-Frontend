import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { PinAllData } from '../../../interfaces/pins/pin-all-data';
import { LikeService } from '../../../shared/services/pin/like.service';

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

  constructor(
    private pinsService: PinsService,
    private likeService: LikeService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'].previousValue !== changes['id'].currentValue) {
      this.getDataPin(this.id);
    }
  }

  private getDataPin(id: number) {
    this.pinsService.getPinAllData(id).subscribe(
      (res) => (this.pinData = res),
      (err) => console.log(err)
    );
  }

  // protected setLike() {
  //   this.likeService.getLikeData().subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  protected imgDownload() {
    fetch(this.pinData.image)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = this.pinData.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => console.error(`Erro ao baixar a imagem: ${err}`));
  }
}
