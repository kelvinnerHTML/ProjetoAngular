import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabDomComponent } from './hab-dom.component';

describe('HabDomComponent', () => {
  let component: HabDomComponent;
  let fixture: ComponentFixture<HabDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
