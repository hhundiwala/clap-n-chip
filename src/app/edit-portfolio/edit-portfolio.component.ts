import { AddId } from './../state/user.action';
import { Portfolio } from './../models/portfolio';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Artist } from '../models/artist';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {

  constructor(private afs: AngularFirestore, private router: Router, private store: Store) { }
  editPortfolioForm;
  art: Artist[];
  
  ngOnInit() {
    var artist$ = this.afs.collection<Artist>('Artists', ref => ref.where('email', '==', "hhundiwala@gmail.com")).valueChanges();
     artist$.subscribe((art) => {
       if(art){
        this.art = art;
        if(art[0].portfolio){
          var port = art[0].portfolio;
          this.editPortfolioForm =   new FormGroup({
            story: new FormControl(port.story),
            values: new FormControl(port.values),
            note: new FormControl(port.note),
            youtube_url: new FormControl(port.youtube_url),
            instagram_url: new FormControl(port.instagram_url),
            facebook_url: new FormControl(port.facebook_url)
          });
        }
       }

      
    });
  }

  updateData(){
    var id$ = this.afs.collection<Artist>('Artists', ref => ref.where('email', '==', "hhundiwala@gmail.com"))
    .snapshotChanges()
    .pipe(map(action => {
      return action.map(action => {
        const data = action.payload.doc.data() as Artist;
        const id = action.payload.doc.id;
        return { id, data };
      })
    }));

    var id;
    var user;
    id$.pipe(first()).subscribe((index) => {
      index.map(data => {
        id = data.id;
      })
      this.afs.collection<Artist>('Artists').doc(id).update({...user, portfolio: this.editPortfolioForm.value});
      this.router.navigateByUrl('/artist-portfolio');   
    })


  }

}
