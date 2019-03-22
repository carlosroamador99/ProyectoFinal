package com.example.restaulike.ui.activity;

import android.arch.lifecycle.Observer;
import android.arch.lifecycle.ViewModelProviders;
import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.restaulike.R;
import com.example.restaulike.model.AnotherResponseContainer;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.retrofit.generator.ServiceGenerator;
import com.example.restaulike.retrofit.services.RestauranteService;
import com.example.restaulike.viewModel.RestauranteViewModel;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RestauranteDetails extends AppCompatActivity {

    private String restId;
    private Restaurante restaurant;
    private RestauranteViewModel restauranteViewModel;
    private TextView tvNombreRest, tvDescripcionRest, tvCalleRest, tvHorarioRest, tvLocalizacionRest, tvCodPostRest, tvCategoria;
    private ImageView ivImgRest;
    private Button menus;
    RestauranteService restauranteService;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_restaurante_details);

        restId = getIntent().getStringExtra("id");
        tvNombreRest = findViewById(R.id.nombre_rest);
        tvDescripcionRest = findViewById(R.id.descripcion_rest);
        tvCalleRest = findViewById(R.id.calle_rest);
        tvHorarioRest = findViewById(R.id.horario_rest);
        tvLocalizacionRest = findViewById(R.id.localizacion_rest);
        tvCodPostRest = findViewById(R.id.cod_post_rest);
        tvCategoria = findViewById(R.id.categoria_rest);
        ivImgRest = findViewById(R.id.img_rest);
        menus = findViewById(R.id.menus_rest);

        restauranteViewModel = ViewModelProviders.of(this).get(RestauranteViewModel.class);
        restauranteViewModel.getRestauranteDetails(restId);

        restauranteViewModel.getRestaurante().observe(this, new Observer<Restaurante>() {
                    @Override
                    public void onChanged(@Nullable Restaurante restaurante) {
                        tvNombreRest.setText(restaurante.getNombre());
                        tvDescripcionRest.setText(restaurante.getDescripcion());
                        tvCalleRest.setText(restaurante.getCalle());
                        tvHorarioRest.setText(restaurante.getHorario());
                        tvLocalizacionRest.setText(restaurante.getLocalizacion());
                        tvCodPostRest.setText(restaurante.getCodPost());
                        //tvCategoria.setText(restaurant.getCategorias());
                        if (restaurante.getUrlImagen() != null) {
                            Glide
                                    .with(RestauranteDetails.this)
                                    .load(restaurante.getUrlImagen())
                                    .into(ivImgRest);
                        }
                    }
                });

        menus.setOnClickListener((View v) -> {
            Intent intent = new Intent(RestauranteDetails.this, MenuRestaurante.class);
            intent.putExtra("id", restId);
            startActivity(intent);
        });

        }
    }
