import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ArtistsComponent } from './artists/artists.component';
import { ShowsComponent } from './shows/shows.component';
import { ContactComponent } from './contact/contact.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'shows',
    component: ShowsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'artists/:id',
    component: ArtistDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
