import { trigger, state, style, transition, animate } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        border: '1px solid #000000',
        backgroundColor: 'transparent',
        padding: '20px'
    })),
    state('marked', style({
        border: '2px solid #0000ff',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    transition('default => marked', [
        style({
            border: '2px solid #000000',
            padding: '19px'
        }),
        animate('300ms ease-out')
    ]),
    transition('marked => default', [
        style({
            border: '1px solid #0000ff',
            padding: '20px'
        }),
        animate('300ms ease-out')
    ]),
    // transition('marked => default', animate('300ms ease-out')),
]);

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('500ms ease-out', style({
            opacity: 1,
            transform: 'translateX(0)'
        }))
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ])
]);
