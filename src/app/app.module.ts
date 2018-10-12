import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
import { AppComponent } from './app.component';
import { TrackDetailsComponent } from './tracks/track-details/track-details.component';
import { TrackListComponent } from './tracks/track-list/track-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackDetailsComponent,
    TrackListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule
=======
    HttpModule
>>>>>>> 90e2d0beb865a61f222af7fab414445eb370e72f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
