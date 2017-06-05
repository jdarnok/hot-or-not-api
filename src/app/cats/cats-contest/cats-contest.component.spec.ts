import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsContestComponent } from './cats-contest.component';

describe('CatsContestComponent', () => {
  let component: CatsContestComponent;
  let fixture: ComponentFixture<CatsContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
