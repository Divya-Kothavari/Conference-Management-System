import { Component } from '@angular/core';
import { addDays, distanceInWords } from 'date-fns';

let commentCode = require('../../../../assets/data/syntax/components/data-display/commentCode.json');
declare var require: any

@Component({
    templateUrl: './comment.component.html'
})

export class CommentComponent {
    
    //Code Highlight
    commentBasicCode : string
    commentWithListCode : string
    commentNestedCode : string
    commentReplayEditorCode : string

    ngOnInit() {
        this.commentBasicCode = commentCode.commentBasicCode;
        this.commentWithListCode = commentCode.commentWithListCode;
        this.commentNestedCode = commentCode.commentNestedCode;
        this.commentReplayEditorCode = commentCode.commentReplayEditorCode;
    }

    likes = 0;
    dislikes = 0;
    time = distanceInWords(new Date(), new Date());

    like(): void {
        this.likes = 1;
        this.dislikes = 0;
    }

    dislike(): void {
        this.likes = 0;
        this.dislikes = 1;
    }

    commentWithListData = [
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources' +
            '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: distanceInWords(new Date(), addDays(new Date(), 1))
        },
        {
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources' +
            '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: distanceInWords(new Date(), addDays(new Date(), 2))
        }
    ];

    commentNestedData = {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources' +
            '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
            {
                author: 'Han Solo',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources' +
                    '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                children: [
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content:
                        'We supply a series of design principles, practical patterns and high quality design resources' +
                        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
                },
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content:
                        'We supply a series of design principles, practical patterns and high quality design resources' +
                        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
                }
                ]
            }
        ]
    };

    replyEditordata: any[] = [];
    submitting = false;
    user = {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    };
    inputValue = '';

    handleSubmit(): void {
        this.submitting = true;
        const content = this.inputValue;
        this.inputValue = '';
        setTimeout(() => {
            this.submitting = false;
            this.replyEditordata = [
                ...this.replyEditordata,
                {
                    ...this.user,
                    content,
                    datetime: new Date(),
                    displayTime: distanceInWords(new Date(), new Date())
                }
            ].map(e => {
                return {
                    ...e,
                    displayTime: distanceInWords(new Date(), e.datetime)
                };
            });
        }, 800);
    }
}    
