import { Component, Input } from '@angular/core';
import { Photo } from '../../../../services/photo/photo.model';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent {
  @Input()
  images: Photo[] = [];

  displayCustom: boolean = false;

  activeIndex: number = 0;

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
