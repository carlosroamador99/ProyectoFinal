import { CategoriaDto } from "../dto/categoria.dto";
import { UrlImagenDto } from "../dto/url-imagen.dto";
import { MenuRestDto } from "../dto/menu.dto";
import { ComentarioDto } from "../dto/comentario.dto";

export interface RestauranteResponse{
    id: string;
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
}