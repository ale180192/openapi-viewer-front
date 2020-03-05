import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComunicationComponent } from './components-comunication.component';

describe('ComponentsComunicationComponent', () => {
  let component: ComponentsComunicationComponent;
  let fixture: ComponentFixture<ComponentsComunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsComunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsComunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
