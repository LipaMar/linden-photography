import { Component } from '@angular/core';
import { PhotoService } from '../../../services/photo/photo.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  $chrzest = this.photoService
    .getHomePagePhotos()
    .pipe(map((photos) => this.getRandomItem(photos, 3)));
  $portret = this.photoService
    .getHomePagePhotos()
    .pipe(map((photos) => this.getRandomItem(photos, 3)));
  $urodziny = this.photoService
    .getHomePagePhotos()
    .pipe(map((photos) => this.getRandomItem(photos, 3)));
  $studniowka = this.photoService
    .getHomePagePhotos()
    .pipe(map((photos) => this.getRandomItem(photos, 3)));
  $komunia = this.photoService
    .getHomePagePhotos()
    .pipe(map((photos) => this.getRandomItem(photos, 3)));

  constructor(private photoService: PhotoService) {}

  private getRandomItem(array: any[], numberOfItems: number): any[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfItems);
  }
}
