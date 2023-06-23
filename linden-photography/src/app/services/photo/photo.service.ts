import { Injectable } from '@angular/core';
import { Photo } from './photo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  getPortfolioPagePhotos(numberOfPhotos: number): Observable<Photo[]> {
    const arr = this.getRandomPhotos(numberOfPhotos);
    return of(arr);
  }

  getHomePagePhotos(): Observable<Photo[]> {
    return of([
      {
        itemImageSrc: `https://fastly.picsum.photos/id/1000/1920/756.jpg?hmac=r2nhw092YEjXth6yTkYL8e3QfGdONbgBIbd5AYKUNUE`,
      },
      {
        itemImageSrc: `https://fastly.picsum.photos/id/176/1920/756.jpg?hmac=QVTwgecpxZFfaBL8cRkP0G8XB8OMVFG4a5AJ_xgwePE`,
      },
      {
        itemImageSrc: `https://fastly.picsum.photos/id/823/1920/756.jpg?hmac=yyLkRdSEBf99ukqJbW4fIOD4makfhu1bk_m3vth3Go8`,
      },
      {
        itemImageSrc: `https://fastly.picsum.photos/id/165/1920/756.jpg?hmac=nNaoeBrjWfaSqAIuWVg9FQUr9KT2ljEJV7Gx-smdvLc`,
      },
      {
        itemImageSrc: `https://fastly.picsum.photos/id/12/1920/756.jpg?hmac=YEqwjOLSdayUIiEDbjKK7eMgpWERvVkoiBoLuYfDuK4`,
      },
    ]);
  }

  private getRandomPhotos(numberOfPhotos: number): Photo[] {
    const arr = [];
    for (let i = 0; i < numberOfPhotos; i++) {
      let height = Math.round(1080 + Math.random() * (1920 - 1080));
      let length = Math.round(1080 + Math.random() * (1920 - 1080));
      arr.push({
        itemImageSrc: `https://picsum.photos/${height}/${length}`,
        thumbnailImageSrc: `https://picsum.photos/${height}/${length}`,
        alt: 'Random photo ' + (i + 1),
        title: 'Random photo ' + (i + 1),
      });
    }
    return arr;
  }
}
