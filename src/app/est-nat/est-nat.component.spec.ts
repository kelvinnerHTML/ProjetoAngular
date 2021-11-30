import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstNatComponent } from './est-nat.component';

describe('EstNatComponent', () => {
  let component: EstNatComponent;
  let fixture: ComponentFixture<EstNatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstNatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstNatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
