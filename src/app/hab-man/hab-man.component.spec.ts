import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabManComponent } from './hab-man.component';

describe('HabManComponent', () => {
  let component: HabManComponent;
  let fixture: ComponentFixture<HabManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
