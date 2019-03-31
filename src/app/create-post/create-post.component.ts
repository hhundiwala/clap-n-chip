import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { UserState } from '../state/user.state';
import { Observable } from 'rxjs';
import { UserStateModel } from '../state/user.model';
import { strictEqual } from 'assert';
import { FirebaseRepoService } from '../service/firebase-reop.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Artist } from '../models/artist';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private afs: AngularFirestore,private router: Router, private firebaseRepo: FirebaseRepoService) { }
  @Select(UserState) userState$: Observable<UserStateModel>;
  state: UserStateModel;
  
  createPostForm;


  ngOnInit() {
    this.userState$.subscribe(state => {
      this.state = state;
      this.createPostForm = new FormGroup({
        embedded_post_url: new FormControl(''),
        post_description: new FormControl(''),
        claps_count: new FormControl(0),
        artist_id: new FormControl(state.id),
      });
    });
  }

  onSubmit(){
    this.firebaseRepo.createPost(this.createPostForm.value).then((x) => { 
      var artist$ = this.afs.collection<Artist>('Artists', ref => ref.where('email', '==', this.state.email)).valueChanges();
      artist$.subscribe((art) => {
        if(art){
          console.log(x.id);
          this.afs.collection<Artist>('Artists').doc(this.state.id).update({...art, post_ids: art[0].post_ids.push(x.id)});
        }
     });
     });
    this.router.navigateByUrl('/artist-portfolio');
  }
  
  hideCreatePost(){
    this.router.navigateByUrl('/artist-portfolio');
  }
}
