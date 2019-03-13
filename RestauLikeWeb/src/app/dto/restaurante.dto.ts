import { CategoriaDto } from "./categoria.dto";
import { UrlImagenDto } from "./url-imagen.dto";
import { MenuRestDto } from "./menu.dto";
import { ComentarioDto } from "./comentario.dto";

export class RestauranteDto{
    nombre: string;
    calle: string;
    descripcion: string;
    localizacion: string;
    horario: string;
    cod_post: string;
    categoria: CategoriaDto;
    url_imagen: UrlImagenDto;
    menu: MenuRestDto;
    comentario: ComentarioDto;

    constructor(nombre: string, descripcion: string, loc: string, horario: string, cod: string,
        categoria: CategoriaDto, url: UrlImagenDto, menu: MenuRestDto, coment: ComentarioDto){
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.localizacion = loc;
            this.horario = horario;
            this.cod_post = cod;
            this.categoria = categoria;
            this.url_imagen = url;
            this.menu = menu;
            this.comentario = coment;
        }

}