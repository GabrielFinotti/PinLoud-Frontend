import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsViewComponent } from './pins-view.component';

describe('PinsViewComponent', () => {
  let component: PinsViewComponent;
  let fixture: ComponentFixture<PinsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
