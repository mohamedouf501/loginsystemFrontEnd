import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';
  export const RoutingAnimation = trigger('RoutingAnimation',[
       transition('*<=>*',[
         style({opacity:0 }),
         animate('1s')
       ])
    ])

  