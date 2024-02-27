import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearScreen1Component } from './arrear-screen1.component';

describe('ArrearScreen1Component', () => {
  let component: ArrearScreen1Component;
  let fixture: ComponentFixture<ArrearScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrearScreen1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrearScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
