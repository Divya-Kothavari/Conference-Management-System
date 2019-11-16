import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimsScopeComponent } from './aims-scope.component';

describe('AimsScopeComponent', () => {
  let component: AimsScopeComponent;
  let fixture: ComponentFixture<AimsScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimsScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimsScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
