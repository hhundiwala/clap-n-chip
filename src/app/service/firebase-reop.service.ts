import { Artist } from './../models/artist';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRepoService {

  constructor(private afs: AngularFirestore) { }

  public createArtist(){
    var artistCollection = this.afs.collection<Artist>('Astists');
    var art: Artist = {
      firstname: "Harsh",
      lastname: "Hundiwala",
      username: "hhundiwala",
      email: "hhundiwala@gmail.com",
      password: "hhundiwala"
    
    }
    return artistCollection.add(art);
  }

  createUser(){

  }

  createPost(){

  }

  createPortfolio(){

  }

  getAllPosts(){

  }

  getAllUsers(){

  }

  getPortfolioOfArtist(){

  }

  clapForPost(){

  }

  chipForPost(){

  }
  
}
