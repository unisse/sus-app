import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {UnidadeDeSaude} from '../unidades-de-saude/models/unidade-de-saude';
import {UnidadeDeSaudeService} from '../unidades-de-saude/services/unidade-de-saude.service';

@Component({
  selector: 'app-detalhe-unidade-saude',
  templateUrl: './detalhe-unidade-saude.page.html',
  styleUrls: ['./detalhe-unidade-saude.page.scss'],
})
export class DetalheUnidadeSaudePage implements OnInit {

  private id: string;
  private unidadeSaude: UnidadeDeSaude = new UnidadeDeSaude(this.id, {});

  constructor(private route: ActivatedRoute, private service: UnidadeDeSaudeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.service.find(this.id).subscribe(result => {
        this.unidadeSaude = result;
        console.log(result);
      });
    });
  }

}
