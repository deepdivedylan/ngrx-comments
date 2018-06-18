import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../reducers/photo.reducer';


@Injectable()
export class PhotoService {
   private photoUrl = 'https://jsonplaceholder.typicode.com/photos';

   constructor(protected  http: HttpClient) {}

   getAllPhotos(): Observable<Photo[]> {
      return this.http.get<Photo[]>(this.photoUrl);
   }
}
