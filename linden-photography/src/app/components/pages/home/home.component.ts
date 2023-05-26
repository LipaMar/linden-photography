import { Component, HostBinding } from '@angular/core';
import { pageAnimations } from '../../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],animations: [
    pageAnimations
  ],
})
export class HomeComponent {
  @HostBinding('@pageAnimations')
  some = [];
}
