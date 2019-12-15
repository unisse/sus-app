import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UnidadeDeSaude} from '../unidades-de-saude/models/unidade-de-saude';
import {UnidadeDeSaudeService} from '../unidades-de-saude/services/unidade-de-saude.service';
import {DiscussaoService} from '../cadastro-ocorrencia/services/discussao.service';

@Component({
  selector: 'app-detalhe-unidade-saude',
  templateUrl: './detalhe-unidade-saude.page.html',
  styleUrls: ['./detalhe-unidade-saude.page.scss'],
})
export class DetalheUnidadeSaudePage implements OnInit {

  unidadeSaude: UnidadeDeSaude = new UnidadeDeSaude('', {});

  constructor(private route: ActivatedRoute,
              private service: UnidadeDeSaudeService,
              private router: Router,
              private discussaoService: DiscussaoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.find(params.id).subscribe(result => {
        this.unidadeSaude = result;
        this.unidadeSaude.id = params.id;
        this.discussaoService.first(this.unidadeSaude);
      });
    });
    this.discussaoService.data.subscribe(result => console.log(result));
  }

  public cadastrarOcorrencia(): void {
    this.router.navigateByUrl('/cadastro-ocorrencia', { state: { data: this.unidadeSaude} });
  }

}
