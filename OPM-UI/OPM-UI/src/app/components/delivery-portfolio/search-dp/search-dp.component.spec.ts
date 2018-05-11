import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDpComponent } from './search-dp.component';

describe('SearchDpComponent', () => {
  let component: SearchDpComponent;
  let fixture: ComponentFixture<SearchDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
