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
      routerLink: '/portfolio',
      options: [
        { label: 'Sesja Portretowa', routerLink: '/portfolio' },
        { label: 'Chrzest Święty', routerLink: '/portfolio' },
        { label: 'Urodziny/Osiemnastka', routerLink: '/portfolio' },
        { label: 'Studiówka/Półmetek', routerLink: '/portfolio' },
        { label: 'Komunia Święta', routerLink: '/portfolio' },
      ],
    },
    { label: 'O mnie', routerLink: '/aboutMe' },
    { label: 'Strefa klienta' },
    { label: 'Kontakt', routerLink: '/contact' },
  ];
  options: any;

  setOptions(options: any): void {
    this.options = options;
  }
}
