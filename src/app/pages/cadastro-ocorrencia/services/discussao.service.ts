import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {Discussao} from '../models/discussao';
import {AuthService} from '../../../services/auth.service';
import {UnidadeDeSaude} from '../../unidades-de-saude/models/unidade-de-saude';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussaoService {

  private dataBehavior: BehaviorSubject<Discussao[]> = new BehaviorSubject([]);
  public data: Observable<Discussao[]> = this.dataBehavior.asObservable();
  latestEntry: any;
  public ended = false;

  private unidadeSaude: UnidadeDeSaude;

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  public cadastrar(discussao: Discussao, unidade: UnidadeDeSaude): void {
    discussao.criacao = new Date();
    discussao.unidadeDeSaude = unidade;
    this.authService.currentUser().subscribe(user => {
      discussao.criador = user;
      this.firestore.collection<Discussao>('discussao').add(discussao).then(d => console.log(d));
    });
  }

  first(unidadeSaude: UnidadeDeSaude) {
    this.unidadeSaude = unidadeSaude;

    const col = this.firestore.collection<Discussao>('discussao', res =>
        res.orderBy('criacao').limit(8));
    col.get().subscribe(result => {
      this.latestEntry = result.docs[result.docs.length - 1];
      const discussaos: Discussao[] = result.docs.map<Discussao>(doc =>  this.toDiscussao(doc));
      this.dataBehavior.next(discussaos);
    });
  }

  next(event) {
    const col = this.firestore.collection<Discussao>('discussao', res =>
        res.where('unidadeDeSaude', '==', this.unidadeSaude.id).orderBy('criacao').startAfter(this.latestEntry).limit(8));
    col.get().subscribe(result => {
      if (result.docs.length < 8) {
        this.ended = true;
      }
      this.latestEntry = result.docs[result.docs.length - 1];
      const discussoes: Discussao[] = result.docs.map<Discussao>(doc =>  this.toDiscussao(doc));
      this.dataBehavior.next(discussoes);
      event.target.complete();
    });
  }

  private toDiscussao(doc: DocumentData): Discussao {
    return new Discussao(doc.id, doc.data());
  }
}
