import { Injectable } from '@angular/core';
import { Photo, PicsumPhoto } from './photo.model';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPortfolioPagePhotos(page: number, limit: number): Observable<Photo[]> {
    let params = new HttpParams().set('page', page).set('limit', limit);
    return this.http
      .get<PicsumPhoto[]>('https://picsum.photos/v2/list', { params })
      .pipe(map((photos) => this.mapToPhotos(photos)));
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

  private mapToPhotos(photos: PicsumPhoto[]) {
    return photos.map((p) => {
      const { download_url } = p;
      return {
        title: 'image',
        alt: 'image',
        itemImageSrc: download_url,
        thumbnailImageSrc: download_url,
      } as Photo;
    });
  }
}
