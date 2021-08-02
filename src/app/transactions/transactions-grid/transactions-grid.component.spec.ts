import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsGridComponent } from './transactions-grid.component';

describe('TransactionsGridComponent', () => {
  let component: TransactionsGridComponent;
  let fixture: ComponentFixture<TransactionsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
