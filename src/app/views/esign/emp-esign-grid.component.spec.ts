import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEsignGridComponent } from './emp-esign-grid.component';

describe('EmpEsignGridComponent', () => {
  let component: EmpEsignGridComponent;
  let fixture: ComponentFixture<EmpEsignGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpEsignGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpEsignGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
