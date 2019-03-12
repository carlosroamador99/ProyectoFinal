package com.example.restaulike.ui.activity;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.widget.TextView;

import com.example.restaulike.R;
import com.example.restaulike.retrofit.services.MapaFragmentInteractionListener;
import com.example.restaulike.retrofit.services.RestauranteInteractionListener;
import com.example.restaulike.ui.fragment.MapFragment;
import com.example.restaulike.ui.fragment.RestaurantesFragment;
import com.example.restaulike.ui.fragment.UserFragment;

public class DashBoardActivity extends AppCompatActivity implements MapaFragmentInteractionListener, RestauranteInteractionListener {

    private TextView mTextMessage;
    private Fragment fMapa;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            Fragment f = null;
            switch (item.getItemId()) {
                case R.id.mapa:
                    f = new MapFragment();
                    break;
                case R.id.lista:
                    f = new RestaurantesFragment();
                    break;
                case R.id.user:
                    f = new UserFragment();
                    break;
            }
            if (f != null){
                getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.container, f)
                        .commit();
            }
            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dash_board);

        mTextMessage = findViewById(R.id.message);
        BottomNavigationView navigation = findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        fMapa = new MapFragment();

        getSupportFragmentManager()
                .beginTransaction()
                .replace(R.id.container, fMapa)
                .commit();
    }

}
