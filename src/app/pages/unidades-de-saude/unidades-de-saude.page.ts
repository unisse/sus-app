import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import {UnidadeDeSaude} from './models/unidade-de-saude';
import {UnidadeDeSaudeService} from './services/unidade-de-saude.service';

@Component({
  selector: 'app-unidades-de-saude',
  templateUrl: './unidades-de-saude.page.html',
  styleUrls: ['./unidades-de-saude.page.scss'],
})
export class UnidadesDeSaudePage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  dataList: UnidadeDeSaude[] = [];
  limit = 8;

  constructor(private service: UnidadeDeSaudeService) {
  }

  ngOnInit(): void {
    this.service.first();
    this.service.data.subscribe(result => {
      result.forEach(r => this.dataList.push(r));
    });
  }

  loadData(event) {
    this.service.next(event);
    this.infiniteScroll.disabled = this.service.ended;
  }

}
