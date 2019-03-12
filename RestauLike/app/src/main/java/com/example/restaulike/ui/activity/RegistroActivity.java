package com.example.restaulike.ui.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.restaulike.R;
import com.example.restaulike.model.LoginResponse;
import com.example.restaulike.model.RegistroResponse;
import com.example.restaulike.retrofit.UtilToken;
import com.example.restaulike.retrofit.generator.ServiceGenerator;
import com.example.restaulike.retrofit.services.LoginService;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegistroActivity extends AppCompatActivity {

    EditText txt_email, txt_name, txt_pass;
    Button btn_registro;
    TextView irLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registro);

        txt_email = findViewById(R.id.r_email);
        txt_name = findViewById(R.id.r_nombre);
        txt_pass = findViewById(R.id.r_contrasenia);
        btn_registro = findViewById(R.id.btn_registro);
        irLogin = findViewById(R.id.ir_login);

        btn_registro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String name = txt_name.getText().toString().trim();
                String email = txt_email.getText().toString().trim();
                String password = txt_pass.getText().toString().trim();

                RegistroResponse registro = new RegistroResponse(email, password, name, "user");
                LoginService service = ServiceGenerator.createService(LoginService.class);
                Call<LoginResponse> loginResponseCall = service.doRegister(registro);

                loginResponseCall.enqueue(new Callback<LoginResponse>() {
                    @Override
                    public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {
                        if (response.code() == 201){
                            UtilToken.setToken(RegistroActivity.this, response.body().getToken());
                            startActivity(new Intent(RegistroActivity.this, DashBoardActivity.class));
                            finish();
                        }else{
                            Toast.makeText(RegistroActivity.this, "Error en el registro", Toast.LENGTH_LONG).show();
                        }
                    }

                    @Override
                    public void onFailure(Call<LoginResponse> call, Throwable t) {
                        Log.e("NetworkFailure", t.getMessage());
                    }
                });
            }
        });

        irLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(RegistroActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }
}
