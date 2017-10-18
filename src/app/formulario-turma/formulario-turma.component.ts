import { Turma } from 'app/turma';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'app/aluno';

@Component({
  selector: 'app-formulario-turma',
  templateUrl: './formulario-turma.component.html',
  styleUrls: ['./formulario-turma.component.css']
})
export class FormularioTurmaComponent implements OnInit {
  @Input()
  turma: Turma;

  @Output()
  onCadastraTurma = new EventEmitter<Turma>();

  constructor() { }

  ngOnInit() {
  }

  cadastrar(): void {
    console.log(this.turma)
    this.onCadastraTurma.emit(this.turma);
  }

}
