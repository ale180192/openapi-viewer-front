import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListRxjsComponent } from './user-list-rxjs.component';

describe('UserListRxjsComponent', () => {
  let component: UserListRxjsComponent;
  let fixture: ComponentFixture<UserListRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
