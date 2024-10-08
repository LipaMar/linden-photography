import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const pageAnimations = [
  trigger('pageAnimations', [
    transition(':enter', [
      query('.animate', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        stagger(-60, [
          animate(
            '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          ),
        ]),
      ]),
    ]),
  ]),
];
