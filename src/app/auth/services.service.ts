import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public angularFireAuth: AngularFireAuth,
    public db: AngularFireDatabase) { }

  // this func helps to register the user data
  signup(email, password) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  // this func helps to login the user into our application
  signin(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  }
  // save users data in the database
  saveUser(obj) {
    return this.db.list('users').push(obj);
  }

}
