import {Component, OnInit} from '@angular/core';
import {TipoOcorrenciaService} from './services/tipo-ocorrencia.service';
import {TipoOcorrencia} from './models/tipo-ocorrencia';
import {AuthService} from '../../services/auth.service';
import {DiscussaoService} from './services/discussao.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnidadeDeSaude} from '../unidades-de-saude/models/unidade-de-saude';

@Component({
  selector: 'app-cadastro-ocorrencia',
  templateUrl: './cadastro-ocorrencia.page.html',
  styleUrls: ['./cadastro-ocorrencia.page.scss'],
})
export class CadastroOcorrenciaPage implements OnInit {

  private unidadeSaude: UnidadeDeSaude;
  private tipos: TipoOcorrencia[] = [];
  private form: FormGroup;

  constructor(private authService: AuthService,
              private tpOcorrenciaService: TipoOcorrenciaService,
              private discussaoService: DiscussaoService,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      texto: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.tpOcorrenciaService.findAll().subscribe(tipos => this.tipos = tipos);
    this.unidadeSaude = history.state.data;
  }

  cadastrar() {
    if (this.form.valid) {
      this.discussaoService.cadastrar(this.form.value, this.unidadeSaude);
      this.form.reset();
    }
  }

}
