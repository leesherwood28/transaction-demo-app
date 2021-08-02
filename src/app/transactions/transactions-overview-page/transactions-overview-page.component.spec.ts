import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOverviewPageComponent } from './transactions-overview-page.component';

describe('TransactionsOverviewPageComponent', () => {
  let component: TransactionsOverviewPageComponent;
  let fixture: ComponentFixture<TransactionsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
