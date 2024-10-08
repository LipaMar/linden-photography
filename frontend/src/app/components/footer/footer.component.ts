import { Component } from '@angular/core';
import {
  faCoffee,
  faEnvelope,
  faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  protected readonly faCoffee = faCoffee;
  protected readonly faFacebook = faFacebook;
  protected readonly faFacebookSquare = faFacebookSquare;
  protected readonly faInstagramSquare = faInstagramSquare;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faSquarePhone = faSquarePhone;
}
