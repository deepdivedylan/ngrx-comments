import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {GET_PHOTOS_SUCCESS} from '../reducers/photo.reducer';


@Injectable()
export class PhotoActions {
   getPhotosSuccess(photos): Action {
      return {type: GET_PHOTOS_SUCCESS, payload: photos};
   }
}
