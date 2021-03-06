import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  providers: [AlbumService, ArtistService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay: FirebaseObjectObservable<Album>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.albumId = urlParametersArray['id'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
