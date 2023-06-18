import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends HomeService implements OnInit {
  images: any[] | undefined;

  ngOnInit() {
    this.getImages().then((images) => (this.images = images));
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
