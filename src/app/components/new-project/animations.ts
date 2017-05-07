import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
    state('valid', style({
        backgroundColor: 'lightgreen',
        borderColor: '#00ff00',
        color: '#00ff00'
    })),
    state('invalid', style({
        backgroundColor: '#ff0000',
        borderColor: 'darkred',
        color: '#ffffff'
    })),
    transition('invalid => valid', [
        group([
            animate(100, style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: 'lightgreen'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ]),
    transition('valid => invalid', [
        group([
            animate(100, style({
                transform: 'scale(1.1)'
            })),
            animate(200, style({
                backgroundColor: '#ff0000'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ])
]);
