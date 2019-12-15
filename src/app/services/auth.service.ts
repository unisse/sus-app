import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import UserCredential = firebase.auth.UserCredential;
import {Usuario} from '../interfaces/usuario';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  resgiter(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err));
    });
  }

  doEmailLogin(value) {
    firebase.auth.EmailAuthProvider.credential('1234@asdf.com', '123');
  }

  doGoogleLogin(): Promise<UserCredential> {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
          .signInWithPopup(provider)
          .then(res => {
            resolve(res);
          });
    });
  }

  currentUser(): Observable<Usuario> {
    return this.afAuth.user.pipe(map(user => this.mapToUsuario(user)));
  }

  private mapToUsuario(user): Usuario {
    if (user == null) {
      return {};
    }
    const usuario: Usuario = {
      uid: user.uid,
      nome: user.displayName,
      imagem: user.photoURL,
      email: user.email
    };
    return usuario;
  }

  public isAuthenticaded(): Observable<boolean> {
    return this.afAuth.user.pipe(map(user => user != null));
  }

  public logout(): void {
    this.afAuth.auth.signOut().then(value => console.log(value));
  }

}
