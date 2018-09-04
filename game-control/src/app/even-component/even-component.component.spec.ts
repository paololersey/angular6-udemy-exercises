import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenComponentComponent } from './even-component.component';

describe('EvenComponentComponent', () => {
  let component: EvenComponentComponent;
  let fixture: ComponentFixture<EvenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
