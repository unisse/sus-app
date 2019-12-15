import {UnidadeDeSaude} from '../../unidades-de-saude/models/unidade-de-saude';
import {User} from '../../../interfaces/user';

export class Discussao {

    id: string;
    texto?: string;
    criacao?: Date;
    unidadeDeSaude?: UnidadeDeSaude;
    criador?: User;

    constructor(id: string, opts: any) {
        this.id = id;
        this.texto = opts.texto;
        this.criacao = opts.criacao;
        this.unidadeDeSaude = opts.unidadeDeSaude;
        this.criador = opts.criador;
    }
}
