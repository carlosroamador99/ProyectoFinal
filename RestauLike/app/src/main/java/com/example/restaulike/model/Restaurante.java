package com.example.restaulike.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Restaurante {


    private String id;
    private String nombre;
    private String calle;
    private String descripcion;
    private String horario;
    private String localizacion;
    private String codPost;
    private List<Categoria> categorias;
    private Menu menu;
    private List<ImgRestaurante> urlImagen;
    private List<Comentario> comentarios;
    private User user;

    public Restaurante(){}

    public Restaurante(String id, String nombre, String calle, String descripcion, String horario, String localizacion, String codPost, List<Categoria> categorias, Menu menu, List<ImgRestaurante> urlImagen, List<Comentario> comentarios, User user) {
        this.id = id;
        this.nombre = nombre;
        this.calle = calle;
        this.descripcion = descripcion;
        this.horario = horario;
        this.localizacion = localizacion;
        this.codPost = codPost;
        this.categorias = categorias;
        this.menu = menu;
        this.urlImagen = urlImagen;
        this.comentarios = comentarios;
        this.user = user;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getLocalizacion() {
        return localizacion;
    }

    public void setLocalizacion(String localizacion) {
        this.localizacion = localizacion;
    }

    public String getCodPost() {
        return codPost;
    }

    public void setCodPost(String codPost) {
        this.codPost = codPost;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    public List<ImgRestaurante> getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(List<ImgRestaurante> urlImagen) {
        this.urlImagen = urlImagen;
    }

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Restaurante that = (Restaurante) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (nombre != null ? !nombre.equals(that.nombre) : that.nombre != null) return false;
        if (calle != null ? !calle.equals(that.calle) : that.calle != null) return false;
        if (descripcion != null ? !descripcion.equals(that.descripcion) : that.descripcion != null)
            return false;
        if (horario != null ? !horario.equals(that.horario) : that.horario != null) return false;
        if (localizacion != null ? !localizacion.equals(that.localizacion) : that.localizacion != null)
            return false;
        if (codPost != null ? !codPost.equals(that.codPost) : that.codPost != null) return false;
        if (categorias != null ? !categorias.equals(that.categorias) : that.categorias != null)
            return false;
        if (menu != null ? !menu.equals(that.menu) : that.menu != null) return false;
        if (urlImagen != null ? !urlImagen.equals(that.urlImagen) : that.urlImagen != null)
            return false;
        if (comentarios != null ? !comentarios.equals(that.comentarios) : that.comentarios != null)
            return false;
        return user != null ? user.equals(that.user) : that.user == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (nombre != null ? nombre.hashCode() : 0);
        result = 31 * result + (calle != null ? calle.hashCode() : 0);
        result = 31 * result + (descripcion != null ? descripcion.hashCode() : 0);
        result = 31 * result + (horario != null ? horario.hashCode() : 0);
        result = 31 * result + (localizacion != null ? localizacion.hashCode() : 0);
        result = 31 * result + (codPost != null ? codPost.hashCode() : 0);
        result = 31 * result + (categorias != null ? categorias.hashCode() : 0);
        result = 31 * result + (menu != null ? menu.hashCode() : 0);
        result = 31 * result + (urlImagen != null ? urlImagen.hashCode() : 0);
        result = 31 * result + (comentarios != null ? comentarios.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        return result;
    }


    @Override
    public String toString() {
        return "Restaurante{" +
                "id='" + id + '\'' +
                ", nombre='" + nombre + '\'' +
                ", calle='" + calle + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", horario='" + horario + '\'' +
                ", localizacion='" + localizacion + '\'' +
                ", codPost='" + codPost + '\'' +
                ", categorias=" + categorias +
                ", menu=" + menu +
                ", urlImagen=" + urlImagen +
                ", comentarios=" + comentarios +
                ", user=" + user +
                '}';
    }
}
