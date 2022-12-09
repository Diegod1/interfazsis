import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdenarHeaderComponent } from './udenar-header.component';

describe('UdenarHeaderComponent', () => {
  let component: UdenarHeaderComponent;
  let fixture: ComponentFixture<UdenarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdenarHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdenarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
