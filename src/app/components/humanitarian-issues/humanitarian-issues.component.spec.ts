import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitarianIssuesComponent } from './humanitarian-issues.component';

describe('HumanitarianIssuesComponent', () => {
  let component: HumanitarianIssuesComponent;
  let fixture: ComponentFixture<HumanitarianIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitarianIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitarianIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
