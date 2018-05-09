import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmViewAllComponent } from './tdm-view-all.component';

describe('TdmViewAllComponent', () => {
  let component: TdmViewAllComponent;
  let fixture: ComponentFixture<TdmViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
