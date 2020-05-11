import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGiftComponent } from './manage-gift.component';

describe('ManageGiftComponent', () => {
  let component: ManageGiftComponent;
  let fixture: ComponentFixture<ManageGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
