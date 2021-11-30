import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdraComponent } from './adra.component';

describe('AdraComponent', () => {
  let component: AdraComponent;
  let fixture: ComponentFixture<AdraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
