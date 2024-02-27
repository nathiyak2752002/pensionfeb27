import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingsheetSettlementComponent } from './workingsheet-settlement.component';

describe('WorkingsheetSettlementComponent', () => {
  let component: WorkingsheetSettlementComponent;
  let fixture: ComponentFixture<WorkingsheetSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkingsheetSettlementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingsheetSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
