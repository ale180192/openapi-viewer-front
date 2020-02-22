import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSchemaListComponent } from './api-schema-list.component';

describe('ApiSchemaListComponent', () => {
  let component: ApiSchemaListComponent;
  let fixture: ComponentFixture<ApiSchemaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSchemaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSchemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
