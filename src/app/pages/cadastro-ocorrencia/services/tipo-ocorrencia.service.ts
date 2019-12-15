import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {TipoOcorrencia} from '../models/tipo-ocorrencia';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoOcorrenciaService {

  constructor(private firestore: AngularFirestore) { }

  public findAll(): Observable<TipoOcorrencia[]> {
    return this.firestore.collection<TipoOcorrencia>('tipos-ocorrencia').valueChanges();
  }
}
