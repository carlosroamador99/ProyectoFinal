package com.example.restaulike.retrofit.services;

import com.example.restaulike.model.AnotherResponseContainer;
import com.example.restaulike.model.ResponseContainer;
import com.example.restaulike.model.Restaurante;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface RestauranteService {

    @GET("/restaurantes/android")
    Call<ResponseContainer<Restaurante>> listRestaurante();

    @GET("/restaurantes/{id}")
    Call<Restaurante> unRestaurante(@Path("id") String id);
}
