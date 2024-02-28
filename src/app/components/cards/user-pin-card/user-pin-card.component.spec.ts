import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPinCardComponent } from './user-pin-card.component';

describe('UserPinCardComponent', () => {
  let component: UserPinCardComponent;
  let fixture: ComponentFixture<UserPinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPinCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
