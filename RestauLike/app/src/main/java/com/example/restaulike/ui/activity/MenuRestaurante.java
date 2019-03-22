package com.example.restaulike.ui.activity;

import android.arch.lifecycle.Observer;
import android.arch.lifecycle.ViewModelProviders;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import com.example.restaulike.R;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.viewModel.RestauranteViewModel;

public class MenuRestaurante extends AppCompatActivity {

    private RecyclerView entrantes, primeros_platos, segundos_platos, postres, bebidas;
    private String restId;
    private Restaurante restaurant;
    private RestauranteViewModel restauranteViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu_restaurante);

        entrantes = findViewById(R.id.entrantes);
        primeros_platos = findViewById(R.id.prim_platos);
        segundos_platos = findViewById(R.id.seg_platos);
        postres = findViewById(R.id.postres);
        bebidas = findViewById(R.id.bebidas);

        restauranteViewModel = ViewModelProviders.of(this).get(RestauranteViewModel.class);
        restauranteViewModel.getRestauranteDetails(restId);

        restauranteViewModel.getRestaurante().observe(this, new Observer<Restaurante>() {
            @Override
            public void onChanged(@Nullable Restaurante restaurante) {

            }
        });
    }

}
