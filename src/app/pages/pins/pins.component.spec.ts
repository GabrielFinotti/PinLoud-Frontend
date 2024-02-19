import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsComponent } from './pins.component';

describe('PinsComponent', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
