import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGiftComponent } from './summary-gift.component';

describe('SummaryGiftComponent', () => {
  let component: SummaryGiftComponent;
  let fixture: ComponentFixture<SummaryGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
