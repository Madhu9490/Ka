import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceOfFinanceComponent } from './source-of-finance.component';

describe('SourceOfFinanceComponent', () => {
  let component: SourceOfFinanceComponent;
  let fixture: ComponentFixture<SourceOfFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceOfFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceOfFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
