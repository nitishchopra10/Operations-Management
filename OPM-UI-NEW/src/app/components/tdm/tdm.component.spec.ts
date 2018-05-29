import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmComponent } from './tdm.component';

describe('TdmComponent', () => {
  let component: TdmComponent;
  let fixture: ComponentFixture<TdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
