import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {

goToDetailPage(clickedAlbum: Album) {
  this.router.navigate(['albums', clickedAlbum.id]);
};

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
