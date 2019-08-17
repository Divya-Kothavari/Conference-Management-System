import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

let modalCode = require('../../../../assets/data/syntax/components/feedback/modalCode.json');
declare var require: any

@Component({
    templateUrl: './modal.component.html'
})    

export class ModalComponent {

    //Code Highlight
    modalBasicCode: string
    modalAsynchronouslyCloseCode: string
    modalCustomizedFooterCode: string
    modalConfirmationModalDialogCode: string
    modalConfirmationModalDialog2Code: string
    modalInformationModalDialogCode: string
    modalInternationalizationCode: string
    modalManualToDestroyCode: string
    modalCustomizePositionCode: string
    modalServiceCode: string
    modalAPICode: string
    modalAPICode2: string
    modalAPICode3: string

    confirmModal: NzModalRef; // For testing by now
    tplModal: NzModalRef;

    constructor(private modalService: NzModalService) {}

    modalBasicIsVisible = false;
    modalAsynchronouslyIsVisible = false;
    modalAsynchronouslyIsOkLoading = false;
    modalFooterIsVisible = false;
    modalFooterIsConfirmLoading = false;
    modalInternationalizationIsVisible = false;
    modalPositionVisibleTop = false;
    modalPositionVisibleMiddle = false;
    
    tplModalButtonLoading = false;
    htmlModalVisible = false;

    basicModalShow(): void {
        this.modalBasicIsVisible = true;
    }

    basicModalHandleOk(): void {
        console.log('Button ok clicked!');
        this.modalBasicIsVisible = false;
    }

    basicModalHandleCancel(): void {
        console.log('Button cancel clicked!');
        this.modalBasicIsVisible = false;
    }

    modalAsynchronouslyShow(): void {
        this.modalAsynchronouslyIsVisible = true;
    }

    modalAsynchronouslyHandleOk(): void {
        this.modalAsynchronouslyIsOkLoading = true;
        window.setTimeout(() => {
        this.modalAsynchronouslyIsVisible = false;
        this.modalAsynchronouslyIsOkLoading = false;
        }, 3000);
    }

    modalAsynchronouslyHandleCancel(): void {
        this.modalAsynchronouslyIsVisible = false;
    }

    modalFooterShow(): void {
        this.modalFooterIsVisible = true;
    }

    modalFooterHandleOk(): void {
        this.modalFooterIsConfirmLoading = true;
        setTimeout(() => {
            this.modalFooterIsVisible = false;
            this.modalFooterIsConfirmLoading = false;
        }, 3000);
    }

    modalFooterHandleCancel(): void {
        this.modalFooterIsVisible = false;
    }

    showModalConfirmationConfirm(): void {
        this.modalService.confirm({
            nzTitle  : '<i>Do you Want to delete these items?</i>',
            nzContent: '<b>Some descriptions</b>',
            nzOnOk   : () => console.log('OK')
        });
    }

    showModalConfirmationDeleteConfirm(): void {
        this.modalService.confirm({
            nzTitle     : 'Are you sure delete this task?',
            nzContent   : '<b class="text-danger">Some descriptions</b>',
            nzOkText    : 'Yes',
            nzOkType    : 'danger',
            nzOnOk      : () => console.log('OK'),
            nzCancelText: 'No',
            nzOnCancel  : () => console.log('Cancel')
        });
    }

    showModalConfirmatioConfirm2(): void {
        this.confirmModal = this.modalService.confirm({
            nzTitle: 'Do you Want to delete these items?',
            nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
            nzOnOk: () => new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'))
        });
    }

    showModalInfo(): void {
        this.modalService.info({
            nzTitle: 'This is a notification message',
            nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
            nzOnOk: () => console.log('Info OK')
        });
    }

    showModalSuccess(): void {
        this.modalService.success({
            nzTitle: 'This is a success message',
            nzContent: 'some messages...some messages...'
        });
    }

    showModalError(): void {
        this.modalService.error({
            nzTitle: 'This is an error message',
            nzContent: 'some messages...some messages...'
        });
    }

    showModalWarning(): void {
        this.modalService.warning({
            nzTitle: 'This is an warning message',
            nzContent: 'some messages...some messages...'
        });
    }

    showModalInternationalizationHandle(): void {
        this.modalInternationalizationIsVisible = true;
    }

    modalInternationalizationHandleOk(): void {
        this.modalInternationalizationIsVisible = false;
    }

    modalInternationalizationHandleCancel(): void {
        this.modalInternationalizationIsVisible = false;
    }

    modalInternationalizationShowConfirm(): void {
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Bla bla ...',
            nzOkText: 'OK',
            nzCancelText: 'Cancel'
        });
    }

    modalPositionShowTop(): void {
        this.modalPositionVisibleTop = true;
    }

    modalPositionShowMiddle(): void {
        this.modalPositionVisibleMiddle = true;
    }

    modalPositionHandleOkTop(): void {
        console.log('clicked ok');
        this.modalPositionVisibleTop = false;
    }

    modalPositionHandleCancelTop(): void {
        this.modalPositionVisibleTop = false;
    }

    modalPositionHandleOkMiddle(): void {
        console.log('clicked ok');
        this.modalPositionVisibleMiddle = false;
    }

    modalPositionCancelMiddle(): void {
        this.modalPositionVisibleMiddle = false;
    }

    showModalManualToDestroy(): void {
        const modal = this.modalService.success({
            nzTitle: 'This is a notification message',
            nzContent: 'This modal will be destroyed after 1 second'
        });
    
        window.setTimeout(() => modal.destroy(), 1000);
    }

    createModal(): void {
        this.modalService.create({
            nzTitle: 'Modal Title',
            nzContent: 'string, will close after 1 sec',
            nzClosable: false,
            nzOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
        });
    }

    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
        this.tplModal = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: false,
            nzOnOk: () => console.log('Click ok')
        });
    }

    destroyTplModal(): void {
        this.tplModalButtonLoading = true;
        window.setTimeout(() => {
            this.tplModalButtonLoading = false;
            this.tplModal.destroy();
        }, 1000);
    }

    createComponentModal(): void {
        const modal = this.modalService.create({
            nzTitle: 'Modal Title',
            nzContent: NzModalCustomComponent,
            nzComponentParams: {
                title: 'title in component',
                subtitle: 'component sub title，will be changed after 2 sec'
            },
            nzFooter: [{
                label: 'change component tilte from outside',
                onClick: (componentInstance) => {
                componentInstance.title = 'title in inner component is changed';
                }
            }]
        });

        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

        // Return a result when closed
        modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));

        // delay until modal instance created
        window.setTimeout(() => {
        const instance = modal.getContentComponent();
            instance.subtitle = 'sub title is changed';
        }, 2000);
    }

    createCustomButtonModal(): void {
        const modal = this.modalService.create({
            nzTitle: 'custom button demo',
            nzContent: 'pass array of button config to nzFooter to create multiple buttons',
            nzFooter: [
                {
                    label: 'Close',
                    shape: 'default',
                    onClick: () => modal.destroy()
                },
                {
                    label: 'Confirm',
                    type: 'primary',
                    onClick: () => this.modalService.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
                },
                {
                    label: 'Change Button Status',
                    type: 'danger',
                    loading: false,
                    onClick(): void {
                        this.loading = true;
                        window.setTimeout(() => this.loading = false, 1000);
                        window.setTimeout(() => {
                        this.loading = false;
                        this.disabled = true;
                        this.label = 'can not be clicked！';
                        }, 2000);
                    }
                },
                {
                    label: 'async load',
                    type: 'dashed',
                    onClick: () => new Promise(resolve => window.setTimeout(resolve, 2000))
                }
            ]
        });
    }

    openAndCloseAll(): void {
        let pos = 0;

        [ 'create', 'info', 'success', 'error' ].forEach((method) => this.modalService[method]({
            nzMask: false,
            nzTitle: `Test ${method} title`,
            nzContent: `Test content: <b>${method}</b>`,
            nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${(pos++) * 300}px` }
        }));

        this.htmlModalVisible = true;

        this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));

        window.setTimeout(() => this.modalService.closeAll(), 2000);
    }

    ngOnInit(): void {
       
        //Code Highlight
        this.modalBasicCode = modalCode.modalBasicCode;
        this.modalAsynchronouslyCloseCode = modalCode.modalAsynchronouslyCloseCode;
        this.modalCustomizedFooterCode = modalCode.modalCustomizedFooterCode;
        this.modalConfirmationModalDialogCode = modalCode.modalConfirmationModalDialogCode;
        this.modalConfirmationModalDialog2Code = modalCode.modalConfirmationModalDialog2Code;
        this.modalInformationModalDialogCode = modalCode.modalInformationModalDialogCode;
        this.modalInternationalizationCode = modalCode.modalInternationalizationCode;
        this.modalManualToDestroyCode = modalCode.modalManualToDestroyCode;
        this.modalCustomizePositionCode = modalCode.modalCustomizePositionCode;
        this.modalServiceCode = modalCode.modalServiceCode;
        this.modalAPICode = modalCode.modalAPICode;
        this.modalAPICode2 = modalCode.modalAPICode2;
        this.modalAPICode3 = modalCode.modalAPICode3;
    }
}    

@Component({
    selector: 'nz-modal-custom-component',
    template: `
        <div>
            <h2>{{ title }}</h2>
            <h4>{{ subtitle }}</h4>
            <p>
                <span>Get Modal instance in component</span>
                <button nz-button [nzType]="'primary'" (click)="destroyModal()">destroy modal in the component</button>
            </p>
        </div>
    `
  })
  export class NzModalCustomComponent {
    @Input() title: string;
    @Input() subtitle: string;

    constructor(private modal: NzModalRef) { }

    destroyModal(): void {
        this.modal.destroy({ data: 'this the result data' });
    }
}



