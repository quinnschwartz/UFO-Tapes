import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  providers: [ArtistService, AlbumService]
})

export class ArtistDetailComponent implements OnInit {

  artistId: string;
  artistToDisplay: FirebaseObjectObservable<Artist>;

  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private artistService: ArtistService,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.artistId = urlParametersArray['id'];
    });
    this.artistToDisplay = this.artistService.getArtistById(this.artistId);
    this.albums = this.albumService.getAlbums();
    }

    goToDetailPage(clickedAlbum) {
      this.router.navigate(['albums', clickedAlbum.$key]);
    };

  }
