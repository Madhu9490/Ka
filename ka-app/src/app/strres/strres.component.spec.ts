import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrresComponent } from './strres.component';

describe('StrresComponent', () => {
  let component: StrresComponent;
  let fixture: ComponentFixture<StrresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
