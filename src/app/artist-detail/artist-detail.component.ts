import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss'],
  providers: [ArtistService]
})

export class ArtistDetailComponent implements OnInit {

  artistId: string;
  artistToDisplay: FirebaseObjectObservable<Artist>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.artistId = urlParametersArray['id'];
    });
    this.artistToDisplay = this.artistService.getArtistById(this.artistId);
    }

  }
