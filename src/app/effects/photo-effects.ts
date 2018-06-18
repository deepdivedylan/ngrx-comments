import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {GET_PHOTOS} from '../reducers/photo.reducer';
import {PhotoService} from '../services/photo.service';
import {map, switchMap} from 'rxjs/operators';
import {PhotoActions} from '../actions/photo.actions';


@Injectable()
export class PhotoEffects {

   constructor(protected actions$: Actions, protected photoActions: PhotoActions, protected photoService: PhotoService) {}

   @Effect()
   photos$: Observable<Action> = this.actions$.pipe(
      ofType(GET_PHOTOS),
      switchMap(() => this.photoService.getAllPhotos()),
      map(photos => this.photoActions.getPhotosSuccess(photos))
   );

}
