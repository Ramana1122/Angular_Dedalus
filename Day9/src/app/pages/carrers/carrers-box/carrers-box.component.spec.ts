import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrersBoxComponent } from './carrers-box.component';

describe('CarrersBoxComponent', () => {
  let component: CarrersBoxComponent;
  let fixture: ComponentFixture<CarrersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrersBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
