import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinUserCardComponent } from './pin-user-card.component';

describe('PinUserCardComponent', () => {
  let component: PinUserCardComponent;
  let fixture: ComponentFixture<PinUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinUserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
