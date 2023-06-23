import { Component } from '@angular/core';
import { PhotoService } from '../../../services/photo/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  $images = this.photoService.getHomePagePhotos();

  responsiveOptions: any[] = [
    {
      breakpoint: '124px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private photoService: PhotoService) {}
}
