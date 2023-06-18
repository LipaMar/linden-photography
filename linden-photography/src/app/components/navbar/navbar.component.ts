import { Component, HostBinding } from '@angular/core';
import { INavbar } from './navbar.interfaces';
import { pageAnimations } from '../../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [pageAnimations],
})
export class NavbarComponent {
  @HostBinding('@pageAnimations')
  menu: INavbar[] = [
    { label: 'Home', routerLink: '/home' },
    {
      label: 'Portfolio',
      options: [
        { label: 'Sesja Portretowa', routerLink: '/' },
        { label: 'Chrzest Święty', routerLink: '/' },
        { label: 'Urodziny /\nOsiemnastka', routerLink: '/' },
        { label: 'Studiówka /\nPółmetek', routerLink: '/' },
        { label: 'Komunia Święta', routerLink: '/' },
      ],
    },
    { label: 'O mnie', routerLink: '/aboutMe' },
    { label: 'Kontakt', routerLink: '/contact' },
  ];
  options: any;

  setOptions(options: any): void {
    this.options = options;
  }
}
