import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivRecComponent } from './ativ-rec.component';

describe('AtivRecComponent', () => {
  let component: AtivRecComponent;
  let fixture: ComponentFixture<AtivRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
