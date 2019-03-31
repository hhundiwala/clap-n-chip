import { Artist } from './../models/artist';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRepoService {

  constructor(private afs: AngularFirestore) { }

  public createArtist(artist: Artist){
    var artistCollection = this.afs.collection<Artist>('Artists');
    return artistCollection.add(artist);
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

  public getPortfolioOfArtist(emailID: string){
    
  }

  clapForPost(){

  }

  chipForPost(){

  }
  
}
