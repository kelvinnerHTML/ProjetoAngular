import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivAgricComponent } from './ativ-agric.component';

describe('AtivAgricComponent', () => {
  let component: AtivAgricComponent;
  let fixture: ComponentFixture<AtivAgricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivAgricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivAgricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
