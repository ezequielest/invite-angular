import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModalComponent } from './add-edit-modal.component';

describe('AddEditModalComponent', () => {
  let component: AddEditModalComponent;
  let fixture: ComponentFixture<AddEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
