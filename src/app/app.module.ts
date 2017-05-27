import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
// import { FirebaseApp } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AlertModule } from 'ngx-bootstrap';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    AlbumDetailComponent,
    AdminComponent,
    ShowsComponent,
    ContactComponent,
    ArtistsComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
