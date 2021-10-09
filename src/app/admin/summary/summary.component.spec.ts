import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  let giftList = [{    
      id: 1,
      alreadyDone: true,
      cant: 2,
      description: 'heladera',
      user: 'sdfas',
      giftedBy: '123'
    },{    
      id: 1,
      alreadyDone: true,
      cant: 2,
      description: 'heladera',
      user: 'sdfas',
      giftedBy: '123'
    }]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
