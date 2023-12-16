import {Tarefa} from './tarefa';
export class ListaTarefas {
listaTarefaid : string ;
nome:string;
descricao: String;
tarefas: Tarefa[];

  constructor(listaTarefaId: string, nome: string, descricao: string, tarefas: Tarefa[]) {
    this.listaTarefaid = listaTarefaId;
    this.nome = nome;
    this.descricao = descricao;
    this.tarefas = tarefas;
  }
}
