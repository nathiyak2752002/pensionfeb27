import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearScreen3Component } from './arrear-screen3.component';

describe('ArrearScreen3Component', () => {
  let component: ArrearScreen3Component;
  let fixture: ComponentFixture<ArrearScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrearScreen3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrearScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
