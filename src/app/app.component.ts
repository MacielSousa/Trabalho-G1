import { Component, OnInit } from '@angular/core';
import '../assets/css/style.css';
import { Aluno } from 'app/aluno';
import { Turma } from 'app/turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alunos: Array<Aluno>
  novo: Aluno = new Aluno(0, '', null, null, null, null, null, null, '')
  turma = new Turma(0, '', null)
  //ultimo_id = 3;
  //Gerenciador de Telas!
  listandoTurma = true;
  cadastrarTurma = false;
  editandoTurma = false;
  editandoAluno = false;
  cadastrandoAluno = false;
  listandoAluno = false;
  turmas: Array<Turma>

  constructor() {
    this.turmas = [

      new Turma(1, 'Turma A',
        [
          new Aluno(1, 'Lucas', 10, 10, 10, 10, 130),
          new Aluno(2, 'Maria', 10, 10, 10, 10, 152),
          new Aluno(3, 'João', 10, 10, 10, 10, 200, 10, 'Aprovado'),
          new Aluno(4, 'Maciel', 10, 10, null, null, 200)
        ]
      ),
      new Turma(2, 'Turma B',
        [
          new Aluno(1, 'Gomes', 10, 10, 10, 10, 130),
          new Aluno(2, 'Sousa', 10, 10, null, null, 152),
          new Aluno(3, 'Silva', 10, 10, 10, 10, 200, 10, 'Aprovado'),
          new Aluno(4, 'Alencar', 10, 10, null, null, 200)
        ])
    ]

    this.turma = this.turmas[0]
    for (let turma of this.turmas) {
         this.calculo(turma)
    }
    


  }
  ngOnInit(): void {
  }

  //metodo que cadastra um aluno em um turma
  cadastrar(aluno: Aluno) {

    //metodo reponsavel por calcular a medi, e verificar a situação do aluno
    

    //Verificação para ver se esta editando ou cadastrando um novo aluno na turma
    if (!this.editandoAluno) {
      //Caso o não tenha nenhuma turma cadastrada
      if (this.turma.alunos == null || this.turma.alunos.length == 0) {
        //entra nesse if caso seja o  primeiro aluno da turma a ser cadastrado
        this.turma.alunos = [
          new Aluno(1, aluno.nome, aluno.bin1, aluno.bin2, aluno.bin3, aluno.bin4, aluno.pre, aluno.media, aluno.situacao)
        ]

        this.novo = new Aluno(0, '', null, null, null, null, null, null, '')
        this.editandoAluno = false;
        this.cadastrandoAluno = false;
        this.listandoAluno = true;
        //Telas Turma
        this.listandoTurma = false;
        this.cadastrarTurma = false;
        this.editandoTurma = false;
        this.calculo(this.turma);
      }
      else {
        //entra no nesse else caso já tenha um ou mais alunos cadastrado
        const novoId: number = this.turma.alunos[this.turma.alunos.length - 1].id + 1
        this.turma.alunos.push(new Aluno(novoId, aluno.nome, aluno.bin1, aluno.bin2, aluno.bin3, aluno.bin4, aluno.pre, aluno.media, aluno.situacao))
        this.novo = new Aluno(0, '', null, null, null, null, null, null, '')
        this.editandoAluno = false;
        this.cadastrandoAluno = false;
        this.listandoAluno = true;
        //Telas Turma
        this.listandoTurma = false;
        this.cadastrarTurma = false;
        this.editandoTurma = false;
        this.calculo(this.turma);
      }
    }
    else {
      //entra nesse else caso esteja editando um aluno
      this.novo = new Aluno(0, '', null, null, null, null, null, null, '')
      this.editandoAluno = false;
      this.cadastrandoAluno = false;
      this.listandoAluno = true;
      //Telas Turma
      this.listandoTurma = false;
      this.cadastrarTurma = false;
      this.editandoTurma = false;
      this.calculo(this.turma);
    }

  }

  novoAluno() {
    this.editandoAluno = false;
    this.cadastrandoAluno = true;
    this.listandoAluno = false;
    //Telas Turma
    this.listandoTurma = false;
    this.cadastrarTurma = false;
    this.editandoTurma = false;
  }
  encontrar(id: number) {
    let indice = -1;
    for (let i = 0; i < this.turma.alunos.length; i++) {
      if (this.turma.alunos[i].id == id) {
        indice = i;
        break;
      }
    }
    return indice
  }

  excluir(aluno: Aluno): void {
    console.log(aluno);
    this.turma.alunos.splice(this.turma.alunos.indexOf(aluno), 1);
    this.novo = new Aluno(0, '', null, null, null, null, null, null, '')
  }

  editar(aluno: Aluno): void {
    this.novo = aluno;
    this.editandoAluno = true;
    this.cadastrandoAluno = false;
    this.listandoAluno = false;
    //Telas Turma
    this.listandoTurma = false;
    this.cadastrarTurma = false;
    this.editandoTurma = false;
  }

  private calculo(turma: Turma): void {
    //Variaveis de Calculo de Nota/Saber a situação dos Alunos
    var cont = 0
    var somaNota = 0
    var media = null
    //Variaveis de dados das Turmas
    var qtAlunos = 0
    var qtAprovados = 0
    var qtPendentes = 0
    var qtReprovados = 0
    var qtMedia = null
    var contMedia = 0

    if (turma.alunos != null) {
      for (let aluno of turma.alunos) {
        qtAlunos++
        var notas = [aluno.bin1, aluno.bin2, aluno.bin3, aluno.bin4]
        for (var i = 0; i < notas.length; i++) {
          if (notas[i] != null) {
            console.log(notas[i]);
            
            cont++
            console.log(cont);
            
            somaNota = somaNota + notas[i]
  
          }
        }

        if(cont > 0){contMedia++}
        if(cont > 0){media = somaNota/cont}
        if(cont > 0){qtMedia = qtMedia + media}
        
        
        aluno.media = media
        somaNota = 0 
        if (media >= 7 && aluno.pre >= 150 && cont == 4) {
          aluno.situacao = 'Aprovado'
          qtAprovados++
        }
        else {
          if (cont < 4 && aluno.pre >= 150 || aluno.pre == null) {
            aluno.situacao = 'Pendente'
            qtPendentes++
          }
          else {
            if (aluno.pre > 150) {
              aluno.situacao = 'Reprovado por Nota'
              qtReprovados++
            }
            else {
              aluno.situacao = 'Reprovado por Falta'
              qtReprovados++
            }
          }
        }
        turma.qtAlunos = qtAlunos
        turma.qtAprovados = qtAprovados
        turma.qtPendentes = qtPendentes
        turma.qtReprovados = qtReprovados
        turma.qtMedia = qtMedia/contMedia
        cont=0
        media = 0
      }
    }
    else {
      turma.qtAlunos = 0
    }

  }


  //Gerenciar Turma
  listarAlunosTurma(turma: Turma) {
    this.turma = turma;
    
    this.calculo(this.turma)
    
    this.editandoAluno = false;
    this.cadastrandoAluno = false;
    this.listandoAluno = true;
    //Telas Turma
    this.listandoTurma = false;
    this.cadastrarTurma = false;
    this.editandoTurma = false;
  }

  excluirTurma(turma: Turma): void {
    this.turmas.splice(this.turmas.indexOf(turma), 1);
    console.log(this.turmas);
  }

  cadastraTurma(turma: Turma) {
    //console.log(this.turma)


    if (!this.editandoTurma) {
      if (this.turmas == null || this.turmas.length == 0) {
        //turma.alunos = this.alunos;
        this.turmas = [
          new Turma(1, turma.nome, turma.alunos)
        ]

        this.turma = new Turma(0, '', null)
        this.editandoAluno = false;
        this.cadastrandoAluno = false;
        this.listandoAluno = false;
        //Telas Turma
        this.listandoTurma = true;
        this.cadastrarTurma = false;
        this.editandoTurma = false;
      }
      else {

        const novoId: number = this.turmas[this.turmas.length - 1].id + 1
        //turma.alunos = this.alunos;
        this.turmas.push(new Turma(novoId, turma.nome, turma.alunos))
        this.turma = new Turma(0, '', null)
        this.editandoAluno = false;
        this.cadastrandoAluno = false;
        this.listandoAluno = false;
        //Telas Turma
        this.listandoTurma = true;
        this.cadastrarTurma = false;
        this.editandoTurma = false;
      }

    }
    else {
      this.turma = new Turma(0, '', null)
      this.editandoAluno = false;
      this.cadastrandoAluno = false;
      this.listandoAluno = false;
      //Telas Turma
      this.listandoTurma = true;
      this.cadastrarTurma = false;
      this.editandoTurma = false;
    }
  }

  editarTurma(turma: Turma): void {
    this.turma = turma;
    this.editandoAluno = false;
    this.cadastrandoAluno = false;
    this.listandoAluno = false;
    //Telas Turma
    this.listandoTurma = false;
    this.cadastrarTurma = false;
    this.editandoTurma = true;
  }

  novaTurma() {
    this.turma = new Turma(0, '', null);
    this.editandoAluno = false;
    this.cadastrandoAluno = false;
    this.listandoAluno = false;
    //Telas Turma
    this.listandoTurma = false;
    this.cadastrarTurma = true;
    this.editandoTurma = false;
  }
  listarTurmas() {
    this.editandoAluno = false;
    this.cadastrandoAluno = false;
    this.listandoAluno = false;
    //Telas Turma
    this.listandoTurma = true;
    this.cadastrarTurma = false;
    this.editandoTurma = false;
  }

}
