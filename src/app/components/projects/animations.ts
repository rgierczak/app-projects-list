import { trigger, state, style } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        border: '1px solid #000000',
        backgroundColor: 'transparent'
    })),
    state('marked', style({
        border: '2px solid #0000ff',
        backgroundColor: '#caeff9'
    }))
]);
