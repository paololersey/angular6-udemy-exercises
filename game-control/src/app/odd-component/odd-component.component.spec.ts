import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddComponentComponent } from './odd-component.component';

describe('OddComponentComponent', () => {
  let component: OddComponentComponent;
  let fixture: ComponentFixture<OddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
