import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWardBlockStreetComponent } from './add-ward-block-street.component';

describe('AddWardBlockStreetComponent', () => {
  let component: AddWardBlockStreetComponent;
  let fixture: ComponentFixture<AddWardBlockStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWardBlockStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWardBlockStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
