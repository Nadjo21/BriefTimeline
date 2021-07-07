import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertimelineComponent } from './ajoutertimeline.component';

describe('AjoutertimelineComponent', () => {
  let component: AjoutertimelineComponent;
  let fixture: ComponentFixture<AjoutertimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutertimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
