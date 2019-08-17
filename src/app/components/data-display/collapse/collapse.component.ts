import { Component } from '@angular/core';

let collapseCode = require('../../../../assets/data/syntax/components/data-display/collapseCode.json');
declare var require: any

@Component({
    templateUrl: './collapse.component.html'
})

export class CollapseComponent {
    
    //Code Highlight
    collapseBasicCode :string
    collapseAccordionCode :string
    collapseNestedCode :string
    collapseBorderlessCode: string
    collapseCustomCode :string
    collapseNoArrowCode :string
    collapseExtraNodeCode: string

    collapseBasicPanels = [
        {
            active    : true,
            name      : 'This is panel header 1',
            disabled  : false
        },
        {
            active  : false,
            disabled: false,
            name    : 'This is panel header 2'
        },
        {
            active  : false,
            disabled: true,
            name    : 'This is panel header 3'
        }
    ];

    collapseAccordionPanels = [
        {
            active    : true,
            name      : 'This is panel header 1',
            childPanel: [
                {
                    active: false,
                    name  : 'This is panel header 1-1'
                }
            ]
        },
        {
            active: false,
            name  : 'This is panel header 2'
        },
        {
            active: false,
            name  : 'This is panel header 3'
        }
    ];

    collapseNestedPanels = [
        {
            active    : true,
            disabled  : false,
            name      : 'This is panel header 1',
            childPanel: [
                {
                    active: true,
                    name  : 'This is panel header 1-1'
                },
                {
                    active: false,
                    name  : 'This is panel header 1-2'
                }
            ]
        },
        {
            active  : false,
            disabled: true,
            name    : 'This is panel header 2'
        },
        {
            active  : false,
            disabled: false,
            name    : 'This is panel header 3'
        }
    ];
    
    collapseCustomPanels = [
        {
            active: true,
            disabled: false,
            name: 'This is panel header 1',
            customStyle: {
            background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
            border: '0px'
            }
        },
        {
            active: false,
            disabled: true,
            name: 'This is panel header 2',
            icon: 'double-right',
            customStyle: {
            background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
            border: '0px'
            }
        },
        {
            active: false,
            disabled: false,
            name: 'This is panel header 3',
            customStyle: {
            background: '#f7f7f7',
                'border-radius': '4px',
                'margin-bottom': '24px',
            border: '0px'
            }
        }
    ];

    collapseNoArrowPanels = [
        {
            active: true,
            name  : 'This is panel header 1',
            arrow : true
        },
        {
            active: false,
            arrow : false,
            name  : 'This is panel header 2'
        }
    ];

    collapseExtraNodePanels = [
        {
            active: true,
            name: 'This is panel header 1',
            disabled: false
        },
        {
            active: false,
            disabled: false,
            name: 'This is panel header 2'
        },
        {
            active: false,
            disabled: true,
            name: 'This is panel header 3'
        }
    ];

    ngOnInit() {
        this.collapseBasicCode = collapseCode.collapseBasicCode;
        this.collapseAccordionCode = collapseCode.collapseAccordionCode;
        this.collapseNestedCode = collapseCode.collapseNestedCode;
        this.collapseBorderlessCode = collapseCode.collapseBorderlessCode;
        this.collapseCustomCode = collapseCode.collapseCustomCode;
        this.collapseNoArrowCode = collapseCode.collapseNoArrowCode;
        this.collapseExtraNodeCode = collapseCode.collapseExtraNodeCode;
    }
}    
