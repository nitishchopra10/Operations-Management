import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDpComponent } from './delete-dp.component';

describe('DeleteDpComponent', () => {
  let component: DeleteDpComponent;
  let fixture: ComponentFixture<DeleteDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
