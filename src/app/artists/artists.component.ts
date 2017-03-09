import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';
import { Router } from '@angular/router';
import { ArtistService } from '../artist.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  providers: [ArtistService]
})

export class ArtistsComponent implements OnInit {

    artists: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    constructor(private router: Router, private artistService: ArtistService) { }

    ngOnInit() {
      this.artists = this.artistService.getArtists();
    }

    goToDetailPage(clickedArtist) {
      this.router.navigate(['artists', clickedArtist.$key]);
    };
  }
