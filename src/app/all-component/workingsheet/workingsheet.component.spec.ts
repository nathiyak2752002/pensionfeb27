import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingsheetComponent } from './workingsheet.component';

describe('WorkingsheetComponent', () => {
  let component: WorkingsheetComponent;
  let fixture: ComponentFixture<WorkingsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkingsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
