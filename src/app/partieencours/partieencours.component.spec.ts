import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieencoursComponent } from './partieencours.component';

describe('PartieencoursComponent', () => {
  let component: PartieencoursComponent;
  let fixture: ComponentFixture<PartieencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartieencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
