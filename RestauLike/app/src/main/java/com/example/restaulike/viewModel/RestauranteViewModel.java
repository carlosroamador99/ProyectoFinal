package com.example.restaulike.viewModel;

import android.app.Application;
import android.arch.lifecycle.AndroidViewModel;
import android.arch.lifecycle.MutableLiveData;
import android.support.annotation.NonNull;
import android.util.Log;

import com.example.restaulike.model.AnotherResponseContainer;
import com.example.restaulike.model.ResponseContainer;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.retrofit.generator.ServiceGenerator;
import com.example.restaulike.retrofit.services.RestauranteService;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RestauranteViewModel extends AndroidViewModel {

    private MutableLiveData<List<Restaurante>> listRestaurante = new MutableLiveData<>();
    private MutableLiveData<Restaurante> restaurante = new MutableLiveData<>();

    private RestauranteService restauranteService;

    public RestauranteViewModel(@NonNull Application application){
        super(application);
        getAllRestaurantes();
    }

    public void getAllRestaurantes() {
        restauranteService = ServiceGenerator.createService(RestauranteService.class);
        Call<ResponseContainer<Restaurante>> call = restauranteService.listRestaurante();
        call.enqueue(new Callback<ResponseContainer<Restaurante>>() {
            @Override
            public void onResponse(Call<ResponseContainer<Restaurante>> call, Response<ResponseContainer<Restaurante>> response) {
                if (response.isSuccessful()) {
                    ResponseContainer<Restaurante> data = response.body();
                    listRestaurante.setValue(data.getRows());
                } else {
                    Log.e("NetworkError", response.message());
                }

            }

            @Override
            public void onFailure(Call<ResponseContainer<Restaurante>> call, Throwable t) {
                Log.e("NetworkError", t.getMessage());
            }
        });
    }

    public void getRestauranteDetails(String id){
        restauranteService = ServiceGenerator.createService(RestauranteService.class);

        Call<Restaurante> call = restauranteService.unRestaurante(id);
        call.enqueue(new Callback<Restaurante>() {
            @Override
            public void onResponse(Call<Restaurante> call, Response<Restaurante> response) {
                if (response.isSuccessful()) {
                    restaurante.setValue(response.body());
                    Log.d("testing restuarante", restaurante.getValue().toString());
                } else {
                    Log.e("Network", response.message());
                }
            }

            @Override
            public void onFailure(Call<Restaurante> call, Throwable t) {
                Log.e("OnFailureGetRestaurante", t.getMessage());
            }
        });
    }

    public MutableLiveData<List<Restaurante>> getListRestaurante(){
        return listRestaurante;
    }
    public MutableLiveData<Restaurante> getRestaurante(){
        return restaurante;
    }

}
