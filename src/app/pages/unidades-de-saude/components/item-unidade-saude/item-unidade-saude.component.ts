import {Component, Input, OnInit} from '@angular/core';
import {UnidadeDeSaude} from '../../models/unidade-de-saude';

@Component({
  selector: 'app-item-unidade-saude',
  templateUrl: './item-unidade-saude.component.html',
  styleUrls: ['./item-unidade-saude.component.scss'],
})
export class ItemUnidadeSaudeComponent implements OnInit {

  @Input() unidade: UnidadeDeSaude;

  constructor() { }

  ngOnInit() {}

  goToUnidade(id) {
    console.log(id);
  }

}
