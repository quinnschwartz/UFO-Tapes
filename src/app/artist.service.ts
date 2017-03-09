import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ArtistService {

  artists: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.artists = angularFire.database.list('artists');
   }

   getArtists() {
     return this.artists;
   }

  addArtist(newArtist: Artist) {
    this.artists.push(newArtist);
  }

  getArtistById(artistId: string) {
    return this.angularFire.database.object('artists/' + artistId);
  }
}
