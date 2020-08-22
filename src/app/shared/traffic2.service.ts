import { Injectable } from '@angular/core';
import { Traffic2 } from './traffic2.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Traffic2Service {
formData: Traffic2;

  constructor(private firestore :AngularFirestore) { }

 getTraffic (){
  return  this.firestore.collection('traffic').snapshotChanges();
 }

}


