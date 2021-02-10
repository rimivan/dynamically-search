import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndListComponent } from './search-and-list.component';

describe('SearchAndListComponent', () => {
  let component: SearchAndListComponent;
  let fixture: ComponentFixture<SearchAndListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
