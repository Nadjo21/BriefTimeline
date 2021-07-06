import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudejeuComponent } from './menudejeu.component';

describe('MenudejeuComponent', () => {
  let component: MenudejeuComponent;
  let fixture: ComponentFixture<MenudejeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudejeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudejeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
