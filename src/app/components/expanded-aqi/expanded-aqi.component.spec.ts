import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedAqiComponent } from './expanded-aqi.component';

describe('ExpandedAqiComponent', () => {
  let component: ExpandedAqiComponent;
  let fixture: ComponentFixture<ExpandedAqiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedAqiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedAqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
