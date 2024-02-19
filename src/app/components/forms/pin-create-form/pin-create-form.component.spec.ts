import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinCreateFormComponent } from './pin-create-form.component';

describe('PinCreateFormComponent', () => {
  let component: PinCreateFormComponent;
  let fixture: ComponentFixture<PinCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
