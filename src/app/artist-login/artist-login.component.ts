import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseRepoService } from '../service/firebase-reop.service';
import { Artist } from '../models/artist';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-login',
  templateUrl: './artist-login.component.html',
  styleUrls: ['./artist-login.component.css']
})
export class ArtistLoginComponent implements OnInit {

  constructor(private firebaseRepo: FirebaseRepoService, private afs: AngularFirestore, private router: Router) { }

  errorMessage: string;
  artistLoginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
    var artist: Artist[];
    var artistCollection = this.afs.collection<Artist>('Artists', ref => ref.where('email', '==', this.artistLoginform.value.email)).valueChanges();
    artistCollection.subscribe((collection) => {
      artist = collection;
      if (artist && artist[0].password === this.artistLoginform.value.password) {
        this.router.navigateByUrl('/artist-portfolio');
      } else {
        this.errorMessage = "UserName or Password Invalid";
      }
    });
  }

}
