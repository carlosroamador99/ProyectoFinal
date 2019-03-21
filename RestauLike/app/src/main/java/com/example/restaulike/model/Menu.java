package com.example.restaulike.model;

import java.util.Arrays;

public class Menu {

    private String id;
    private String[] entrantes;
    private String[] primerosPlatos;
    private String[] segundosPlatos;
    private String[] postres;
    private String[] bebidas;

    public Menu() {
    }

    public Menu(String id, String[] entrantes, String[] primerosPlatos, String[] segundosPlatos, String[] postres, String[] bebidas) {
        this.id = id;
        this.entrantes = entrantes;
        this.primerosPlatos = primerosPlatos;
        this.segundosPlatos = segundosPlatos;
        this.postres = postres;
        this.bebidas = bebidas;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String[] getEntrantes() {
        return entrantes;
    }

    public void setEntrantes(String[] entrantes) {
        this.entrantes = entrantes;
    }

    public String[] getPrimerosPlatos() {
        return primerosPlatos;
    }

    public void setPrimerosPlatos(String[] primerosPlatos) {
        this.primerosPlatos = primerosPlatos;
    }

    public String[] getSegundosPlatos() {
        return segundosPlatos;
    }

    public void setSegundosPlatos(String[] segundosPlatos) {
        this.segundosPlatos = segundosPlatos;
    }

    public String[] getPostres() {
        return postres;
    }

    public void setPostres(String[] postres) {
        this.postres = postres;
    }

    public String[] getBebidas() {
        return bebidas;
    }

    public void setBebidas(String[] bebidas) {
        this.bebidas = bebidas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Menu menu = (Menu) o;

        if (id != null ? !id.equals(menu.id) : menu.id != null) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        if (!Arrays.equals(entrantes, menu.entrantes)) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        if (!Arrays.equals(primerosPlatos, menu.primerosPlatos)) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        if (!Arrays.equals(segundosPlatos, menu.segundosPlatos)) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        if (!Arrays.equals(postres, menu.postres)) return false;
        // Probably incorrect - comparing Object[] arrays with Arrays.equals
        return Arrays.equals(bebidas, menu.bebidas);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + Arrays.hashCode(entrantes);
        result = 31 * result + Arrays.hashCode(primerosPlatos);
        result = 31 * result + Arrays.hashCode(segundosPlatos);
        result = 31 * result + Arrays.hashCode(postres);
        result = 31 * result + Arrays.hashCode(bebidas);
        return result;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "id='" + id + '\'' +
                ", entrantes=" + Arrays.toString(entrantes) +
                ", primerosPlatos=" + Arrays.toString(primerosPlatos) +
                ", segundosPlatos=" + Arrays.toString(segundosPlatos) +
                ", postres=" + Arrays.toString(postres) +
                ", bebidas=" + Arrays.toString(bebidas) +
                '}';
    }
}
