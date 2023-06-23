import { Component } from '@angular/core';
import { PhotoService } from '../../../services/photo/photo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  $chrzest = this.photoService.getPortfolioPagePhotos(5);
  $portret = this.photoService.getPortfolioPagePhotos(3);
  $urodziny = this.photoService.getPortfolioPagePhotos(2);
  $studniowka = this.photoService.getPortfolioPagePhotos(9);
  $komunia = this.photoService.getPortfolioPagePhotos(7);

  constructor(private photoService: PhotoService) {}

  private getRandomItem(array: any[], numberOfItems: number): any[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfItems);
  }
}
