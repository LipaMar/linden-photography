import { Component, HostBinding } from '@angular/core';
import { pageAnimations } from '../../../animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [pageAnimations],
})
export class AboutMeComponent {
  @HostBinding('@pageAnimations')
  asd: any;
}
