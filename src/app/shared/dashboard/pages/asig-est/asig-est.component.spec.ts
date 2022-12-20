import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigEstComponent } from './asig-est.component';

describe('AsigEstComponent', () => {
  let component: AsigEstComponent;
  let fixture: ComponentFixture<AsigEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsigEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsigEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
