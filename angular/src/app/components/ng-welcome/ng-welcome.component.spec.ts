import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWelcomeComponent } from './ng-welcome.component';

describe('NgWelcomeComponent', () => {
  let component: NgWelcomeComponent;
  let fixture: ComponentFixture<NgWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
