import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaCon1Page } from './sala-con1.page';

describe('SalaCon1Page', () => {
  let component: SalaCon1Page;
  let fixture: ComponentFixture<SalaCon1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalaCon1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
