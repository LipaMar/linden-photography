import { Injectable } from '@angular/core';
import { PhotoService } from './photo-service';
import { Observable } from 'rxjs';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class LocalPhotoService implements PhotoService {
  constructor() {}

  getPortfolioPagePhotos(
    catalog?: string | undefined,
    limit?: number | undefined
  ): Observable<Photo[]> {
    throw new Error('Method not implemented.');
  }

  getHomePagePhotos(): Observable<Photo[]> {
    throw new Error('Method not implemented.');
  }
}
