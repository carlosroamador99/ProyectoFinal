import { CategoriaDto } from "./categoria.dto";
import { UrlImagenDto } from "./url-imagen.dto";
import { MenuRestDto } from "./menu.dto";
import { ComentarioDto } from "./comentario.dto";
import { UserDto } from "./user.dto";

export class RestauranteDto{
    id: string
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
    user: string;

    constructor(id: string, nombre: string, calle: string, descripcion: string, loc: string, horario: string, cod: string,
        categoria: CategoriaDto, url: UrlImagenDto, menu: MenuRestDto, coment: ComentarioDto, user: string){
            this.id = id;
            this.nombre = nombre;
            this.calle;
            this.descripcion = descripcion;
            this.localizacion = loc;
            this.horario = horario;
            this.cod_post = cod;
            this.categoria = categoria;
            this.url_imagen = url;
            this.menu = menu;
            this.comentario = coment;
            this.user = user;
        }

}