import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaracterComponent } from './addcaracter.component';

describe('AddcaracterComponent', () => {
  let component: AddcaracterComponent;
  let fixture: ComponentFixture<AddcaracterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcaracterComponent]
    });
    fixture = TestBed.createComponent(AddcaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
