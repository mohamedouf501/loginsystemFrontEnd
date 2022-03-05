import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';
  export const openComponent = trigger('Open',[
    transition(':enter', [
      style({ opacity: 0 }),
      animate('4s', style({ 
        opacity: 1 ,
      })),
    ]),
    transition(':leave', [
      animate('1s', style({ 
        opacity: 0 ,
      }))
    ])
    ])

  