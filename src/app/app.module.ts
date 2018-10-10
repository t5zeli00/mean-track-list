import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
