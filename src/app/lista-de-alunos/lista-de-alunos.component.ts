import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'app/aluno';
import { Turma } from 'app/turma';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {
  @Input()
  turma: Turma

  //@Input()
  //lista: Array<Aluno>

  novo: Aluno

  @Output()
  onExcluir = new EventEmitter<Aluno>();

  @Output()
  onEditar = new EventEmitter<Aluno>();

  @Output()
  novoAluno = new EventEmitter<Turma>();

  constructor()
   {    
   }

  ngOnInit() {
  }

  excluir(aluno: Aluno): void {
    this.onExcluir.emit(aluno);
  }

  editar(aluno: Aluno): void {
    this.onEditar.emit(aluno);
  }

  corLinha(aluno: Aluno)
  {
    if(aluno.situacao == 'Aprovado')
    {
      return 'alert alert-success'
    }
    else
    {
      if(aluno.situacao == 'Pendente')
      {
        return 'alert alert-warning'
      }
      else{
        return 'alert alert-danger'
      }
    }
  }

  novoAlu()
  {
    this.novoAluno.emit();
  }
  

}
