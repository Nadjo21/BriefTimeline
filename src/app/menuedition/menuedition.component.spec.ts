import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenueditionComponent } from './menuedition.component';

describe('MenueditionComponent', () => {
  let component: MenueditionComponent;
  let fixture: ComponentFixture<MenueditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenueditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenueditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
