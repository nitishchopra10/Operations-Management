import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDpComponent } from './update-dp.component';

describe('UpdateDpComponent', () => {
  let component: UpdateDpComponent;
  let fixture: ComponentFixture<UpdateDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
