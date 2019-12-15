export class UnidadeDeSaude {
    id: string;
    nome: string;

    constructor(id: string, opts: {nome?: string}) {
        this.id = id;
        this.nome = opts.nome;
    }
}
