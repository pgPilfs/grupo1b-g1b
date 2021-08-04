import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarComponent } from './dolar.component';

describe('DolarComponent', () => {
  let component: DolarComponent;
  let fixture: ComponentFixture<DolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
