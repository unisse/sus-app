import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/firestore';
import {UnidadeDeSaude} from '../models/unidade-de-saude';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeDeSaudeService {

  private dataBehavior: BehaviorSubject<UnidadeDeSaude[]>;
  public data: Observable<UnidadeDeSaude[]>;
  latestEntry: any;
  public ended = false;

  constructor(private firestore: AngularFirestore) { }

  public find(limit: number): Observable<UnidadeDeSaude[]> {
    return this.firestore.collection<UnidadeDeSaude>('unidades-de-saude',
            res => res.orderBy('nome').startAt(0).limit(limit)).valueChanges();
  }

  first() {
    this.dataBehavior = new BehaviorSubject([]);
    this.data = this.dataBehavior.asObservable();

    const col = this.firestore.collection<UnidadeDeSaude>('unidades-de-saude', res =>
        res.orderBy('nome').limit(8));
    col.get().subscribe(result => {
      this.latestEntry = result.docs[result.docs.length - 1];
      const unidades: UnidadeDeSaude[] = result.docs.map<UnidadeDeSaude>(doc =>  this.toUnidade(doc));
      this.dataBehavior.next(unidades);
    });
  }

  next(event) {
    const col = this.firestore.collection<UnidadeDeSaude>('unidades-de-saude', res =>
        res.orderBy('nome').startAfter(this.latestEntry).limit(8));
    col.get().subscribe(result => {
      if (result.docs.length < 8) {
        this.ended = true;
      }
      this.latestEntry = result.docs[result.docs.length - 1];
      const unidades: UnidadeDeSaude[] = result.docs.map<UnidadeDeSaude>(doc =>  this.toUnidade(doc));
      this.dataBehavior.next(unidades);
      event.target.complete();
    });
  }

  private toUnidade(doc: DocumentData): UnidadeDeSaude {
    return new UnidadeDeSaude(doc.id, doc.data());
  }


}
