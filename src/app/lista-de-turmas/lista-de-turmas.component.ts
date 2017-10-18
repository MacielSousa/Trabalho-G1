import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'app/aluno';
import { Turma } from 'app/turma';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  @Input()
  turmas: Array<Turma>

  @Output()
  onExcluirTurma = new EventEmitter<Turma>();

  @Output()
  onEditarTurma = new EventEmitter<Turma>();

  @Output()
  detalheTurma = new EventEmitter<Turma>();

  @Output()
  novaTurma = new EventEmitter<Turma>();
  constructor()
   {    
   }

  ngOnInit() {
  }

  detalhe(turma: Turma): void{
    this.detalheTurma.emit(turma);
  }
  
  excluir(turma: Turma): void {
    this.onExcluirTurma.emit(turma);
  }

  editar(turma: Turma): void {
    this.onEditarTurma.emit(turma);
  }

  nova()
  {
    this.novaTurma.emit();
  }

  
  
/** 
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
*/
}
