package com.example.restaulike.ui.activity;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.example.restaulike.R;
import com.example.restaulike.model.LoginResponse;
import com.example.restaulike.model.User;
import com.example.restaulike.retrofit.UtilToken;
import com.example.restaulike.retrofit.generator.ServiceGenerator;
import com.example.restaulike.retrofit.services.LoginService;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    EditText tx_email, tx_contrasenia;
    TextView irRegistro;
    Button btn_login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tx_email = findViewById(R.id.email);
        tx_contrasenia = findViewById(R.id.contrasenia);
        irRegistro = findViewById(R.id.ir_registro);
        btn_login = findViewById(R.id.btn_login);

        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email_txt = tx_email.getText().toString();
                String pass_txt = tx_contrasenia.getText().toString();

                LoginService service = ServiceGenerator.createService(LoginService.class, email_txt, pass_txt);
                Call<LoginResponse> call = service.doLogin();

                call.enqueue(new Callback<LoginResponse>() {
                    @Override
                    public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {
                        if (response.code() != 201) {
                            Log.e("Request Error", response.message());
                        } else {
                            User tmp = response.body().getUser();
                            UtilToken.setToken(MainActivity.this, response.body().getToken());
                            UtilToken.setuserData(MainActivity.this, tmp.getName(), tmp.getEmail(),tmp.getPicture());

                            Log.i("Prueba", "Evento click");
                            Intent i = new Intent(
                                    MainActivity.this,
                                    DashBoardActivity.class
                            );
                            startActivity(i);
                            finish();
                        }
                    }

                    @Override
                    public void onFailure(Call<LoginResponse> call, Throwable t) {
                        Log.e("Network Failure", t.getMessage());
                    }
                });
            }
        });

        irRegistro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, RegistroActivity.class);
                startActivity(intent);
                finish();
             }
        });
    }
}
    