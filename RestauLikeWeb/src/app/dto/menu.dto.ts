export class MenuRestDto{
    entrantes: string[];
    primr_plato: string[];
    seg_plato: string[];
    postre: string[];
    bebidas: string[];

    constructor(entrantes:string[], primeros: string[], segundos: string[], postres: string[], bebidas: string[]){
        this.entrantes = entrantes;
        this.primr_plato = primeros;
        this.seg_plato = segundos;
        this.postre = postres;
        this.bebidas = bebidas;
    }
}