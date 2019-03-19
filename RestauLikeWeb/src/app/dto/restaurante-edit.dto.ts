export class RestauranteEditDto {
    id: string;
    nombre: string;
    calle: string;
    descripcion: string;
    localizacion: string;
    horario: string;
    cod_post: string;

    constructor(id: string, nombre: string, calle: string, descripcion: string, loc: string, horario: string, cod: string) {
        this.id = id;
        this.nombre = nombre;
        this.calle = calle;
        this.descripcion = descripcion;
        this.localizacion = loc;
        this.horario = horario;
        this.cod_post = cod;
    }
}