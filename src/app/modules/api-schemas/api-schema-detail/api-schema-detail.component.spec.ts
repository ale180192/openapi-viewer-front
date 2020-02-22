import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSchemaDetailComponent } from './api-schema-detail.component';

describe('ApiSchemaDetailComponent', () => {
  let component: ApiSchemaDetailComponent;
  let fixture: ComponentFixture<ApiSchemaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSchemaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSchemaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
