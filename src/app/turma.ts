import { Aluno } from "./aluno";
export class Turma {
    id: number
    nome: string
    alunos: Array<Aluno>
    qtAlunos: number
    qtAprovados: number
    qtPendentes: number
    qtReprovados: number
    qtMedia
    constructor(id: number, nome: string, alunos?: Array<Aluno>, qtAlunos?: number ,qtAprovados?: number, qtPendentes?: number, qtReprovados?: number, qtMedia?: number){
        this.id = id
        this.nome = nome
        this.alunos = alunos
        this.qtAlunos = qtAlunos
        this.qtAprovados = qtAprovados
        this.qtPendentes = qtPendentes
        this.qtReprovados = qtReprovados
        this.qtMedia = qtMedia
    }
}
