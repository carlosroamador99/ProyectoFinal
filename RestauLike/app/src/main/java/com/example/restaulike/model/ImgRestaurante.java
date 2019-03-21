package com.example.restaulike.model;

public class ImgRestaurante {

    private String id;
    private String url;

    public ImgRestaurante() {
    }

    public ImgRestaurante(String id, String url) {
        this.id = id;
        this.url = url;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ImgRestaurante that = (ImgRestaurante) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        return url != null ? url.equals(that.url) : that.url == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (url != null ? url.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "ImgRestaurante{" +
                "id='" + id + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
