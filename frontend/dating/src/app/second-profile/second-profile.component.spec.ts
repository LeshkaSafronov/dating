import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProfileComponent } from './second-profile.component';

describe('SecondProfileComponent', () => {
  let component: SecondProfileComponent;
  let fixture: ComponentFixture<SecondProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
