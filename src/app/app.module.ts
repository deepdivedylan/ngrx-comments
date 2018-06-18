import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {photoReducer} from './reducers/photo.reducer';
import {todoReducer} from './reducers/todo.reducer';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      StoreModule.forRoot({photoReducer}),
      StoreModule.forRoot({todoReducer})
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
