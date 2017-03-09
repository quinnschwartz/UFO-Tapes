import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AlbumService } from '../album.service';
import { ArtistService } from '../artist.service';
import { Album } from '../album.model';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AlbumService, ArtistService]
})

export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService,
    private artistService: ArtistService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, cover: string, price: number) {
    var newAlbum: Album = new Album(title, artist, description, cover, price);
    this.albumService.addAlbum(newAlbum);
  }

  submitForm2(name: string, bio: string, photo: string) {
    var newArtist: Artist = new Artist(name, bio, photo);
    this.artistService.addArtist(newArtist);
  }

}
