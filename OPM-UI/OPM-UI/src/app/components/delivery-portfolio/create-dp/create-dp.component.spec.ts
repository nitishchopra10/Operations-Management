import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDpComponent } from './create-dp.component';

describe('CreateDpComponent', () => {
  let component: CreateDpComponent;
  let fixture: ComponentFixture<CreateDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
