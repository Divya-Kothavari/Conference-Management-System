import { Component } from '@angular/core';
import { NzMessageService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { HttpRequest, HttpClient, HttpEventType, HttpEvent, HttpResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

let uploadCode = require('../../../../assets/data/syntax/components/data-entry/uploadCode.json');
declare var require: any

@Component({
    templateUrl: './upload.component.html'
})   

export class UploadComponent {

    //Code Highlight
    uploadBasicCode: string
    uploadAvatarCode: string
    uploadDefaultFileCode: string
    uploadPictureWallCode: string
    uploadFilterCode: string
    uploadDragNDropCode: string
    uploadDirectoryCode: string
    uploadManuallyCode: string
    uploadPicturesListCode: string
    uploadCustomRequestCode: string
    uploadAPICode1: string
    uploadAPICode2: string

    uploadAvatarLoading = false;
    uploadAvatarUrl: string;
    uplaodPictureWallPreviewImage = '';
    uplaodPictureWallPreviewVisible = false;
    uploadManuallyFileList: UploadFile[] = [];
    uploadManuallyUploading = false;

    uploadDefaultFileList = [
        {
            uid: 1,
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', 
            url: 'http://www.google.com/xxx.png'
        },
        {
            uid: 2,
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.google.com/yyy.png'
        },
        {
            uid: 3,
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', 
            url: 'http://www.google.com/zzz.png'
        }
    ];
    uplaodFileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ];
    uploadFilterFileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.google.com/xxx.png'
        }
    ];
    uploadPicturesListDefaultFileList = [
        {
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
            uid: -2,
            name: 'yyy.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
    ];

    constructor(private msg: NzMessageService, private http: HttpClient,) {}

    uploadAvatarBeforeUpload = (file: File) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            this.msg.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.msg.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }

    private getBase64(img: File, callback: (img: {}) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    uploadAvatarHandleChange(info: { file: UploadFile }): void {
        if (info.file.status === 'uploading') {
            this.uploadAvatarLoading = true;
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, (img: string) => {
                this.uploadAvatarLoading = false;
                this.uploadAvatarUrl = img;
            });
        }
    }

    uplaodPictureWallHandlePreview = (file: UploadFile) => {
        this.uplaodPictureWallPreviewImage = file.url || file.thumbUrl;
        this.uplaodPictureWallPreviewVisible = true;
    }

    

    uploadFilterHandleChange(info: any): void {
        const fileList = info.fileList;
        if (info.file.response) {
            info.file.url = info.file.response.url;
        }
        this.uploadFilterFileList = fileList.filter(item => {
            if (item.response) {
                return item.response.status === 'success';
            }
            return true;
        });
    }

    uploadDragNDropHandleChange({ file, fileList }): void {
        const status = file.status;
        if (status !== 'uploading') {
            console.log(file, fileList);
        }
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }


    uploadManuallyBeforeUpload = (file: UploadFile): boolean => {
        this.uploadManuallyFileList.push(file);
        return false;
    }

    uploadManuallyHandleUpload(): void {
        const formData = new FormData();
        this.uploadManuallyFileList.forEach((file: any) => {
            formData.append('files[]', file);
        });
        this.uploadManuallyUploading = true;
        const req = new HttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts/', formData, {
        });
        this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
            (event: {}) => {
                this.uploadManuallyUploading = false;
                this.msg.success('upload successfully.');
            },
            err => {
                this.uploadManuallyUploading = false;
                this.msg.error('upload failed.');
            }
        );
    }

    uploadPicturesListFileList1 = [...this.uploadPicturesListDefaultFileList];
    uploadPicturesListFileList2 = [...this.uploadPicturesListDefaultFileList];

    customReq = (item: UploadXHRArgs) => {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        formData.append('file', item.file as any);
        formData.append('id', '1000');
        const req = new HttpRequest('POST', item.action, formData, {
            reportProgress : true,
            withCredentials: true
        });
        return this.http.request(req).subscribe((event: HttpEvent<{}>) => {
            if (event.type === HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    (event as any).percent = event.loaded / event.total * 100;
                }
                item.onProgress(event, item.file);
            } else if (event instanceof HttpResponse) {
                item.onSuccess(event.body, item.file, event);
            }
        }, (err) => {
            item.onError(err, item.file);
        });
    }
       
    customBigReq = (item: UploadXHRArgs) => {
        const size = item.file.size;
        const chunkSize = parseInt((size / 3) + '', 10);
        const maxChunk = Math.ceil(size / chunkSize);
        const reqs = Array(maxChunk).fill(0).map((v: {}, index: number) => {
            const start = index * chunkSize;
            let end = start + chunkSize;
            if (size - end < 0) {
            end = size;
            }
            const formData = new FormData();
            formData.append('file', item.file.slice(start, end));
            formData.append('start', start.toString());
            formData.append('end', end.toString());
            formData.append('index', index.toString());
            const req = new HttpRequest('POST', item.action, formData, {
            withCredentials: true
            });
            return this.http.request(req);
        });
        return forkJoin(...reqs).subscribe(resules => {
            item.onSuccess({}, item.file, event);
        }, (err) => {
            item.onError(err, item.file);
        });
    }

    ngOnInit(): void {

        //Code Highlight
        this.uploadBasicCode = uploadCode.uploadBasicCode;
        this.uploadAvatarCode = uploadCode.uploadAvatarCode;
        this.uploadDefaultFileCode = uploadCode.uploadDefaultFileCode;
        this.uploadPictureWallCode = uploadCode.uploadPictureWallCode;
        this.uploadFilterCode = uploadCode.uploadFilterCode;
        this.uploadDragNDropCode = uploadCode.uploadDragNDropCode;
        this.uploadDirectoryCode = uploadCode.uploadDirectoryCode;
        this.uploadManuallyCode = uploadCode.uploadManuallyCode;
        this.uploadPicturesListCode = uploadCode.uploadPicturesListCode;
        this.uploadCustomRequestCode = uploadCode.uploadCustomRequestCode;
        this.uploadAPICode1 = uploadCode.uploadAPICode1;
        this.uploadAPICode2 = uploadCode.uploadAPICode2;
    }
}