import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmAddTeamMembersComponent } from './tdm-add-team-members.component';

describe('TdmAddTeamMembersComponent', () => {
  let component: TdmAddTeamMembersComponent;
  let fixture: ComponentFixture<TdmAddTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdmAddTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdmAddTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
