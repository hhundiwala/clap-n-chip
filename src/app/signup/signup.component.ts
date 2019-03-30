import { Artist } from './../models/artist';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseRepoService } from '../service/firebase-reop.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseRepo: FirebaseRepoService) { }

  artistform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
     this.firebaseRepo.createArtist(this.artistform.value).then((x) => { console.log(x.id)});
    console.log(this.artistform.value);
  }
}




