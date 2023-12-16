export class Tarefa {
  tarefaId: string;
  nome: string;
  descricao: string;
  finalizada: boolean;
  dataCriacao: string;
  dataFinalizacao: string | null;

  constructor(
    tarefaId: string,
    nome: string,
    descricao: string,
    finalizada: boolean,
    dataCriacao: string,
    dataFinalizacao: string | null
  ) {
    this.tarefaId = tarefaId;
    this.nome = nome;
    this.descricao = descricao;
    this.finalizada = finalizada;
    this.dataCriacao = dataCriacao;
    this.dataFinalizacao = dataFinalizacao;
  }
}
