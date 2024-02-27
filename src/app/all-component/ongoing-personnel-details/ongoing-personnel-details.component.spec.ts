import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingPersonnelDetailsComponent } from './ongoing-personnel-details.component';

describe('OngoingPersonnelDetailsComponent', () => {
  let component: OngoingPersonnelDetailsComponent;
  let fixture: ComponentFixture<OngoingPersonnelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OngoingPersonnelDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngoingPersonnelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
