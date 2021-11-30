import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivProfComponent } from './ativ-prof.component';

describe('AtivProfComponent', () => {
  let component: AtivProfComponent;
  let fixture: ComponentFixture<AtivProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
