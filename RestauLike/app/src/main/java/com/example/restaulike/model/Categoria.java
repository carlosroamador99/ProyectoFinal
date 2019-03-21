package com.example.restaulike.model;

public class Categoria {

    private String id;
    private String categoria;

    public Categoria() {
    }

    public Categoria(String id, String categoria) {
        this.id = id;
        this.categoria = categoria;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Categoria categoria1 = (Categoria) o;

        if (id != null ? !id.equals(categoria1.id) : categoria1.id != null) return false;
        return categoria != null ? categoria.equals(categoria1.categoria) : categoria1.categoria == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (categoria != null ? categoria.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Categoria{" +
                "id='" + id + '\'' +
                ", categoria='" + categoria + '\'' +
                '}';
    }
}
