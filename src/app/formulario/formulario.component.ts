import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'app/aluno';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input()
  novo: Aluno;

  @Output()
  onCadastrar = new EventEmitter<Aluno>();

  constructor() { }

  ngOnInit() {
  }

  cadastrar(): void {
    console.log(this.novo)
    this.onCadastrar.emit(this.novo);
}

}
