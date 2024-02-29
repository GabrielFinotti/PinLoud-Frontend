import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCardPreviewComponent } from './pin-card-preview.component';

describe('PinCardPreviewComponent', () => {
  let component: PinCardPreviewComponent;
  let fixture: ComponentFixture<PinCardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinCardPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
