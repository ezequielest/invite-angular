import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomGiftModalComponent } from './add-edit-custom-gift-modal.component';

describe('AddEditCustomGiftModalComponent', () => {
  let component: AddEditCustomGiftModalComponent;
  let fixture: ComponentFixture<AddEditCustomGiftModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCustomGiftModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustomGiftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
