import { Component } from '@angular/core';
import { INavbar } from './navbar.interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menu: INavbar[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Portfolio', options: [] },
    { label: 'O mnie' },
    { label: 'Strefa klienta' },
    { label: 'Kontakt', routerLink: '/contact' },
  ];
}
