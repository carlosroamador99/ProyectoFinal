package com.example.restaulike.retrofit.services;

import com.example.restaulike.model.LoginResponse;
import com.example.restaulike.model.RegistroResponse;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface LoginService {

    @POST("/auth")
    Call<LoginResponse> doLogin();

    @POST("/users")
    Call<LoginResponse> doRegister(@Body RegistroResponse registro);
}
