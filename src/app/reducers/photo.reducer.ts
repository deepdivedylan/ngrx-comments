import {ActionWithPayload} from './todo.reducer';

export const ADD_PHOTO = 'ADD_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const GET_PHOTOS = 'GET_PHOTOS';

export interface Photo {
   albumId?: number;
   id?: number;
   title?: string;
   url?: string;
   thumbnailUrl?: string;
}

export function photoReducer(state = [], action: ActionWithPayload<Photo>) {
   switch (action.type) {
      case ADD_PHOTO:
         return[action.payload, ...state];
      case DELETE_PHOTO:
         return state.filter(item => item.id !== action.payload.id);
      case GET_PHOTOS:
         return[action.payload];
      default:
         return state;
   }
}
