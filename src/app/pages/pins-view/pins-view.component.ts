import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PinCardPreviewComponent } from '../../components/cards/pin-card-preview/pin-card-preview.component';
import { PinCardComponent } from '../../components/cards/pin-card/pin-card.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-pins-view',
  standalone: true,
  imports: [FooterComponent, PinCardPreviewComponent, PinCardComponent],
  templateUrl: './pins-view.component.html',
  styleUrl: './pins-view.component.scss',
})
export class PinsViewComponent implements OnInit, OnDestroy {
  private subscription!: Subscription | undefined;
  protected id!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRouterId();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected getRouterId() {
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const idParam = params.get('id');

          if (idParam) {
            this.id = parseInt(idParam);

            if (isNaN(this.id)) console.error('Digite um id válido!');
          }

          return [];
        })
      )
      .subscribe();
  }
}
