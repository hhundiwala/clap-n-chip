import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistLoginComponent } from './artist-login/artist-login.component';
import { ArtistPortfolioComponent } from './artist-portfolio/artist-portfolio.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';

const routes: Routes = [
  { path: 'artist-signup', component: SignupComponent },
  { path: 'artist-login', component: ArtistLoginComponent },
  { path: 'artist-portfolio', component: ArtistPortfolioComponent },
  { path: 'edit-portfolio', component: EditPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
