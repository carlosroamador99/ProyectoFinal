package com.example.restaulike.model;

public class Comentario {

    private String id;
    private String valoracion;
    private String comentario;
    private User user;

    public Comentario(){}

    public Comentario(String id, String valoracion, String comentario, User user) {
        this.id = id;
        this.valoracion = valoracion;
        this.comentario = comentario;
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getValoracion() {
        return valoracion;
    }

    public void setValoracion(String valoracion) {
        this.valoracion = valoracion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
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

        Comentario that = (Comentario) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (valoracion != null ? !valoracion.equals(that.valoracion) : that.valoracion != null)
            return false;
        if (comentario != null ? !comentario.equals(that.comentario) : that.comentario != null)
            return false;
        return user != null ? user.equals(that.user) : that.user == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (valoracion != null ? valoracion.hashCode() : 0);
        result = 31 * result + (comentario != null ? comentario.hashCode() : 0);
        result = 31 * result + (user != null ? user.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Comentario{" +
                "id='" + id + '\'' +
                ", valoracion='" + valoracion + '\'' +
                ", comentario='" + comentario + '\'' +
                ", user=" + user +
                '}';
    }
}
