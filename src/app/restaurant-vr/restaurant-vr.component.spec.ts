import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVrComponent } from './restaurant-vr.component';

describe('RestaurantVrComponent', () => {
  let component: RestaurantVrComponent;
  let fixture: ComponentFixture<RestaurantVrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantVrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
