import { Component, OnInit } from '@angular/core';

let carouselCode = require('../../../../assets/data/syntax/components/data-display/carouselCode.json');
declare var require: any

@Component({
    templateUrl: './carousel.component.html',
    styles  : [
        `[nz-carousel-content] {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #364d79;
            color: #fff;
            overflow: hidden;
        }

        [nz-carousel-content] h3 {
            height: 160px;
            line-height: 160px;
        }    
        `
    ]  
})

export class CarouselComponent implements OnInit {

    //Code Highlight
    carouselBasicCode: string;
    carouselPositionCode: string;
    carouselFadeInCode: string;
    carouselScrollAutomaticallyCode: string;

    carouselArray = [ 1, 2, 3 ];
    carouselBasicEffect = 'scrollx';
    dotPosition = 'bottom';
    
    ngOnInit() {
        setTimeout(() => {
            this.carouselBasicEffect = 'fade';
        }, 3000);

        //Code Highlight
        this.carouselBasicCode = carouselCode.carouselBasicCode;
        this.carouselPositionCode = carouselCode.carouselPositionCode;
        this.carouselFadeInCode = carouselCode.carouselFadeInCode;
        this.carouselScrollAutomaticallyCode = carouselCode.carouselScrollAutomaticallyCode;
    }
}