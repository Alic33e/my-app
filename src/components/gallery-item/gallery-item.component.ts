import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class GalleryItemComponent {
  @Input() item: any;
}
