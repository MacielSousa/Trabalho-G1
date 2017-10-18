export class Aluno {
    id: number
    nome: string
    bin1: number
    bin2: number
    bin3: number
    bin4: number
    media: number
    pre: number
    situacao: string
    constructor(id: number, nome: string, bin1: number, bin2: number,bin3: number, bin4: number, pre: number, media?: number ,situacao?: string){
        this.id = id
        this.nome = nome
        this.bin1 = bin1
        this.bin2 = bin2
        this.bin3 = bin3
        this.bin4 = bin4
        this.media = media
        this.pre = pre
        this.situacao = situacao
    }   
}