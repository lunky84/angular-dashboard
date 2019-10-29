import {
    trigger,
    animate,
    transition,
    style,
    query
  } from '@angular/animations';

  export const slideFadeAnimation = trigger('slideFadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({
          opacity: 0,
          left: 50
        })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({
          opacity: 1,
        }), animate('0.2s', style({
          opacity: 0,
        }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({
          opacity: 0,
          left: 50
        }), animate('0.2s', style({
          opacity: 1,
          left: 0
        }))],
        { optional: true }
      )
    ])
  ]);
