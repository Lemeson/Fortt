import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceRelatorioComponent } from './interface-relatorio.component';

describe('InterfaceRelatorioComponent', () => {
  let component: InterfaceRelatorioComponent;
  let fixture: ComponentFixture<InterfaceRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceRelatorioComponent]
    });
    fixture = TestBed.createComponent(InterfaceRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
