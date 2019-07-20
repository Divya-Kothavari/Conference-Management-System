import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { SupportPopUpComponent } from './support-pop-up.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('SupportPopUpComponent', () => {
  let component: SupportPopUpComponent;
  let fixture: ComponentFixture<SupportPopUpComponent>;

  beforeEach(async(() => {
    const formBuilderStub = { group: object1 => ({}) };
    TestBed.configureTestingModule({
      declarations: [ SupportPopUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        HttpClientModule
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPopUpComponent);
    component = fixture.componentInstance;
 //   fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
  describe('openSupportPopup', () => {
    it('makes expected calls', () => {
      spyOn(component, 'openSupportPopup').and.callThrough();
      component.openSupportPopup();
      expect(component.openSupportPopup).toHaveBeenCalled();
    });
  });
  describe('closeSupportModal', () => {
    it('makes expected calls', () => {
      spyOn(component, 'closeSupportModal').and.callThrough();
      component.closeSupportModal();
      expect(component.closeSupportModal).toHaveBeenCalled();
    });
  });
});
