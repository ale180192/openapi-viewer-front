import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateRxjsComponent } from './user-create-rxjs.component';

describe('UserCreateRxjsComponent', () => {
  let component: UserCreateRxjsComponent;
  let fixture: ComponentFixture<UserCreateRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
