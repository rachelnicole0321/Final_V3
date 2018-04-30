import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSearchComponent } from './final-search.component';

describe('FinalSearchComponent', () => {
  let component: FinalSearchComponent;
  let fixture: ComponentFixture<FinalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
