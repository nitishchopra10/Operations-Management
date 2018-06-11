import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmSearchComponent } from './tdm-search.component';

describe('TdmSearchComponent', () => {
  let component: TdmSearchComponent;
  let fixture: ComponentFixture<TdmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
