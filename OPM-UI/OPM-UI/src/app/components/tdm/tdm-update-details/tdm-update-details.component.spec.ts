import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmUpdateDetailsComponent } from './tdm-update-details.component';

describe('TdmUpdateDetailsComponent', () => {
  let component: TdmUpdateDetailsComponent;
  let fixture: ComponentFixture<TdmUpdateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmUpdateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
