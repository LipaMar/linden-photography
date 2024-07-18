import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PhotoService } from '../../../services/photo/photo.service';
import { ActivatedRoute } from '@angular/router';

export type PortfolioTypes =
  | 'chrzest'
  | 'portret'
  | 'urodziny'
  | 'studniowka'
  | 'komunia';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('chrzest', { read: ElementRef })
  chrzestElement?: ElementRef;
  @ViewChild('portret', { read: ElementRef })
  portretElement?: ElementRef;
  @ViewChild('urodziny', { read: ElementRef })
  urodzinyElement?: ElementRef;
  @ViewChild('studniowka', { read: ElementRef })
  studniowkaElement?: ElementRef;
  @ViewChild('komunia', { read: ElementRef })
  komuniaElement?: ElementRef;

  $chrzest = this.photoService.getPortfolioPagePhotos(0, 5);
  $portret = this.photoService.getPortfolioPagePhotos(10, 5);
  $urodziny = this.photoService.getPortfolioPagePhotos(20, 5);
  $studniowka = this.photoService.getPortfolioPagePhotos(30, 5);
  $komunia = this.photoService.getPortfolioPagePhotos(40, 5);

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((value) => {
      let scrollTo;
      switch (value as PortfolioTypes) {
        case 'chrzest':
          scrollTo = this.chrzestElement;
          break;
        case 'komunia':
          scrollTo = this.komuniaElement;
          break;
        case 'studniowka':
          scrollTo = this.studniowkaElement;
          break;
        case 'portret':
          scrollTo = this.portretElement;
          break;
        case 'urodziny':
          scrollTo = this.urodzinyElement;
          break;
      }
      if (scrollTo) {
        scrollTo.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
}
