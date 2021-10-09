import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGiftComponent } from './summary-gift.component';
import { HttpClientModule } from '@angular/common/http';

describe('SummaryGiftComponent', () => {
  let component: SummaryGiftComponent;
  let fixture: ComponentFixture<SummaryGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGiftComponent ],
      imports: [HttpClientModule],
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
