// import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { UserService } from '../../core/services/user.service';
// import { JwtService } from '../../core/services/jwt.service';
// import { Router } from '@angular/router';
// import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { NzMessageService } from 'ng-zorro-antd';
// import { SigninComponent } from './signin.component';
// // describe('SigninComponent', () => {
// //   let component: SigninComponent;
// //   let fixture: ComponentFixture<SigninComponent>;
// //   let userService: UserService;
// //   beforeEach(() => {
// //     const userServiceStub = { loginUser: data1 => ({ subscribe: () => ({}) }) };
// //     const jwtServiceStub = { saveToken: arg1 => ({}) };
// //     const routerStub = { navigate: array1 => ({}) };
// //     // const routerStub = { navigate: () => ({}) };
// //     const formBuilderStub = { group: object1 => ({}) };
// //     const nzMessageServiceStub = { create: (string1, arg2) => ({}) };
// //     TestBed.configureTestingModule({
// //       schemas: [NO_ERRORS_SCHEMA],
// //       declarations: [SigninComponent],
// //       imports: [ReactiveFormsModule],
// //       providers: [
// //         { provide: UserService, useValue: MockUserSerice },
// //         { provide: JwtService, useValue: jwtServiceStub },
// //         { provide: Router, useValue: routerStub },
// //         { provide: FormBuilder, useValue: formBuilderStub },
// //         { provide: NzMessageService, useValue: nzMessageServiceStub }
// //       ]
// //     });
// //     fixture = TestBed.createComponent(SigninComponent);
// //     component = fixture.componentInstance;
// //     // fixture.detectChanges();
// //   });
// describe('SigninComponent', () => {
//   let component: SigninComponent;
//   let fixture: ComponentFixture<SigninComponent>;
//   let userService: UserService;
//   beforeEach(async(() => {
//     const jwtServiceStub = { saveToken: arg1 => ({}) };
//     const routerStub = { navigate: array1 => ({}) };
//     // const routerStub = { navigate: () => ({}) };
//     const formBuilderStub = { group: object1 => ({}) };
//     const nzMessageServiceStub = { create: (string1, arg2) => ({}) };
//     TestBed.configureTestingModule({
//       declarations: [SigninComponent],
//       imports: [ReactiveFormsModule, FormsModule],
//       providers: [
//         { provide: UserService, useValue: MockUserSerice },
//         { provide: JwtService, useValue: jwtServiceStub },
//         { provide: Router, useValue: routerStub },
//         { provide: FormBuilder, useValue: formBuilderStub },
//         { provide: NzMessageService, useValue: nzMessageServiceStub }
//       ]
//     })
//       .compileComponents();
//   }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SigninComponent);
//     component = fixture.componentInstance;
//     userService = TestBed.get(UserService);
//     fixture.detectChanges();
//   });

//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('passwordVisible defaults to: false', () => {
//     expect(component.passwordVisible).toEqual(false);
//   });
//   it('passwordVisibleSingup defaults to: false', () => {
//     expect(component.passwordVisibleSingup).toEqual(false);
//   });
//   it('passwordVisibleConfirm defaults to: false', () => {
//     expect(component.passwordVisibleConfirm).toEqual(false);
//   });
//   it('jsonURL defaults to: assets/authenticate.json', () => {
//     expect(component.jsonURL).toEqual('assets/authenticate.json');
//   });
//   it('showError defaults to: false', () => {
//     expect(component.showError).toEqual(false);
//   });
//   it('isLoadingOne defaults to: false', () => {
//     expect(component.isLoadingOne).toEqual(false);
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const routerStub: Router = fixture.debugElement.injector.get(Router);
//       const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
//         FormBuilder
//       );
//       const routerStubs: Router = TestBed.get(Router);
//       spyOn(routerStubs, 'navigate').and.callThrough();
//       spyOn(formBuilderStub, 'group').and.callThrough();
//       component.ngOnInit();
//       // expect(routerStubs.navigate).toHaveBeenCalled();
//       expect(formBuilderStub.group).toHaveBeenCalled();
//     });
//   });
//   describe('submitForm', () => {
//     it('makes expected calls', () => {

//       let formValidSpy = spyOnProperty(UserService.form, 'valid', 'get').and.returnValue(true);
//       let spy = spyOn(empService.form, 'get').and.returnValue({value: 'notNull'}); 
// let updateSpy = spyOn(empService, 'updateEmployee');
// component.onSubmit(); 
// expect(updateSpy).toHaveBeenCalled();


//       const userServiceStub: UserService = fixture.debugElement.injector.get(
//         UserService
//       );
//       const jwtServiceStub: JwtService = fixture.debugElement.injector.get(
//         JwtService
//       );
//       const routerStub: Router = fixture.debugElement.injector.get(Router);
//       const nzMessageServiceStub: NzMessageService = fixture.debugElement.injector.get(
//         NzMessageService
//       );
//       component.validateForm = this.fb.group({
//         //  userName: [null, [Validators.email, Validators.required]],
//         userName: ['', Validators.required],
//         password: ['', Validators.required],
//         remember: [true]
//       });
//       spyOn(userServiceStub, 'loginUser').and.callThrough();
//       spyOn(jwtServiceStub, 'saveToken').and.callThrough();
//       spyOn(routerStub, 'navigate').and.callThrough();
//       spyOn(nzMessageServiceStub, 'create').and.callThrough();
//       component.validateForm.controls.userName.setValue('markdoe');
//       component.validateForm.controls.password.setValue('edunxt');
//       component.validateForm.controls.remember.setValue(true);

//       component.submitForm();
//       expect(userServiceStub.loginUser).toHaveBeenCalled();
//       expect(jwtServiceStub.saveToken).toHaveBeenCalled();
//       expect(routerStub.navigate).toHaveBeenCalled();
//       expect(nzMessageServiceStub.create).toHaveBeenCalled();

//       let insertSpy = spyOn(empService, 'insertEmployee').and.callThrough();
//       let formValidSpy = spyOnProperty(empService.form, 'valid', 'get').and.returnValue(true);
//       component.onSubmit();
//       expect(insertSpy).toHaveBeenCalled();
//     });
//   });
// });
