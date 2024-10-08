import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MockPhotoService } from '../../../services/photo/mock-photo.service';
import { ActivatedRoute } from '@angular/router';
import {PhotoService} from "../../../services/photo/photo-service";

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

  $chrzest = this.photoService.getPortfolioPagePhotos('chrzest');
  $portret = this.photoService.getPortfolioPagePhotos('portret');
  $urodziny = this.photoService.getPortfolioPagePhotos('urodziny');
  $studniowka = this.photoService.getPortfolioPagePhotos('studniowka');
  $komunia = this.photoService.getPortfolioPagePhotos('komunia');

  constructor(
    private photoService: MockPhotoService,
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
