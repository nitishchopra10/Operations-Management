import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmDeleteComponent } from './tdm-delete.component';

describe('TdmDeleteComponent', () => {
  let component: TdmDeleteComponent;
  let fixture: ComponentFixture<TdmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
