import { Component } from '@angular/core';

let skeletonCode = require('../../../../assets/data/syntax/components/feedback/skeletonCode.json');
declare var require: any

@Component({
    templateUrl: './skeleton.component.html'
})    

export class SkeletonComponent {

    //Code Highlight
    skeletonBasicCode: string
    skeletonComplexCombinationCode: string
    skeletonActiveAnimationCode: string
    skeletonContainsSubComponentCode: string
    skeletonListSampleCode: string
   
    containSubLoading = false;

    showSkeleton(): void {
        this.containSubLoading = true;
        setTimeout(() => {
            this.containSubLoading = false;
        }, 3000);
    }

    listSampleloading = true;
    listData = new Array(3).fill({}).map((i, index) => {
        return {
            href: 'http://ng.ant.design',
            title: `ant design part ${index}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
        };
    });

    ngOnInit(): void {

        //Code Highlight
        this.skeletonBasicCode = skeletonCode.skeletonBasicCode;
        this.skeletonComplexCombinationCode = skeletonCode.skeletonComplexCombinationCode;
        this.skeletonActiveAnimationCode = skeletonCode.skeletonActiveAnimationCode;
        this.skeletonContainsSubComponentCode = skeletonCode.skeletonContainsSubComponentCode;
        this.skeletonListSampleCode = skeletonCode.skeletonListSampleCode;
    }
}    