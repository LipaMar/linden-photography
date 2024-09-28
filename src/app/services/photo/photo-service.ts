import { Observable } from 'rxjs';
import { Photo } from './photo.model';

export interface PhotoService {
  getPortfolioPagePhotos(catalog?: string, limit?: number): Observable<Photo[]>;

  getHomePagePhotos(): Observable<Photo[]>;
}
