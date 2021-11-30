import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CieSauComponent } from './cie-sau.component';

describe('CieSauComponent', () => {
  let component: CieSauComponent;
  let fixture: ComponentFixture<CieSauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CieSauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CieSauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
