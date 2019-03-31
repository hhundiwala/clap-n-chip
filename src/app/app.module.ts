import { CreatePostComponent } from './create-post/create-post.component';
import { UserState } from './state/user.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistLoginComponent } from './artist-login/artist-login.component';
import { ArtistPortfolioComponent } from './artist-portfolio/artist-portfolio.component';
import { HeaderComponent } from './header/header.component';
import { EditPortfolioComponent } from './edit-portfolio/edit-portfolio.component';
import { NgxsModule } from '@ngxs/store';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ArtistLoginComponent,
    ArtistPortfolioComponent,
    HeaderComponent,
    EditPortfolioComponent,
    CreatePostComponent,
    UserSignupComponent,
    UserLoginComponent
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([UserState]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
