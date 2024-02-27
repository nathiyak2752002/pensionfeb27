import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearScreen2Component } from './arrear-screen2.component';

describe('ArrearScreen2Component', () => {
  let component: ArrearScreen2Component;
  let fixture: ComponentFixture<ArrearScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrearScreen2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrearScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
