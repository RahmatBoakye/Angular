import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForGroupedExampleComponent } from './ng-for-grouped-example.component';

describe('NgForGroupedExampleComponent', () => {
  let component: NgForGroupedExampleComponent;
  let fixture: ComponentFixture<NgForGroupedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForGroupedExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForGroupedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
