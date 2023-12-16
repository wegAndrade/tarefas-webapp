import { CommonModule, NgFor } from '@angular/common';
import { ListaTarefas } from '../../Models/lista-tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TarefasService } from '../../Services/tarefas.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarefa } from '../../Models/tarefa';
import { Console } from 'console';

@Component({
    selector: 'app-tarefa-list',
    standalone: true,
    templateUrl: './tarefa-list.component.html',
    styleUrl: './tarefa-list.component.css',
    imports: [CommonModule, NgbNavModule, NgFor, FontAwesomeModule, ReactiveFormsModule]
})
export class TarefaListComponent implements OnInit {
  ListasDeTarefas: ListaTarefas[] = [];
  faPlus = faPlus
   datepipe: DatePipe = new DatePipe('pt-BR');
  formatoData : string =  'dd-MMM-YYYY HH:mm:ss';
  nomeFormControl = new FormControl('', Validators.required);
  descricaoFormControl = new FormControl('');
  criarListaTarefaForm = new FormGroup({});


  constructor(private tarefaService:TarefasService, private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.criarListaTarefaForm.addControl('nomeFormControl', this.nomeFormControl);
    this.criarListaTarefaForm.addControl('descricaoFormControl', this.descricaoFormControl);
    this.ObterListaTarefas();

  }

  public ObterListaTarefas() {
    this.tarefaService
    .ObterListaTarefas(1)
    .subscribe({
      next : (value) => {
        this.ListasDeTarefas = value;
    },
     error: (error) => {
        console.log(error);
    },
    complete: () => {
      console.log('Obter Lista tarefas - FIM')
    }
    });
 }

  CriarListaTarefa(){
    var nome = this.criarListaTarefaForm.get('nomeFormControl')?.value;
    var descricao = this.criarListaTarefaForm.get('descricaoFormControl')?.value;
    var body = {
      nome,
      descricao

    }
    console.log(body);

    this.tarefaService.CriarTarefa(body, ObterUsuarioId()).subscribe({next: () => {
      this.RecarregarListaTarefas();
      this.LimparFormularioListaTarefas();
    }, error: (err) => console.log(err)})
  }

  RecarregarListaTarefas(){
    this.ObterListaTarefas();

  }
  LimparFormularioListaTarefas(){
    this.criarListaTarefaForm.get('nomeFormControl')?.reset();
    this.criarListaTarefaForm.get('descricaoFormControl')?.reset();
  }
}




function ObterUsuarioId(): number {
return 1;
}

