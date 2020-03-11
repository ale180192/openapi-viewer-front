import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAngularComponent } from './signup-angular.component';

describe('SignupAngularComponent', () => {
  let component: SignupAngularComponent;
  let fixture: ComponentFixture<SignupAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
