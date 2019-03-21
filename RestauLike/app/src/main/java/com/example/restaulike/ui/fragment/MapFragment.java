package com.example.restaulike.ui.fragment;

import android.arch.lifecycle.Observer;
import android.arch.lifecycle.ViewModelProviders;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.restaulike.R;
import com.example.restaulike.interactionListeners.MapaFragmentInteractionListener;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.ui.activity.DashBoardActivity;
import com.example.restaulike.ui.activity.MapsActivity;
import com.example.restaulike.ui.activity.RestauranteDetails;
import com.example.restaulike.viewModel.RestauranteViewModel;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MapStyleOptions;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;

import java.util.List;
import java.util.Objects;


public class MapFragment extends Fragment implements OnMapReadyCallback {

    private SupportMapFragment mapFragment;
    private Context ctx;
    private GoogleMap mMap;
    private RestauranteViewModel rViewModel;


    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";


    private MapaFragmentInteractionListener mListener;

    public MapFragment() {
        // Required empty public constructor
    }


    public static MapFragment newInstance(String param1, String param2) {
        MapFragment fragment = new MapFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_map, container, false);
        mapFragment = (SupportMapFragment) getChildFragmentManager().findFragmentById(R.id.map);
        if (mapFragment == null){
            FragmentManager fragmentManager = getFragmentManager();
            FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
            mapFragment = SupportMapFragment.newInstance();
            fragmentTransaction.replace(R.id.map, mapFragment).commit();
        }
            mapFragment.getMapAsync(this);
            return view;
    }

    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        this.ctx = context;
        if (context instanceof MapaFragmentInteractionListener) {
            mListener = (MapaFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        rViewModel = ViewModelProviders.of(MapFragment.this).get(RestauranteViewModel.class);
        rViewModel.getListRestaurante().observe(this, new Observer<List<Restaurante>>() {
            @Override
            public void onChanged(@Nullable List<Restaurante> restaurantes) {
                System.out.println(rViewModel.getListRestaurante());
                for (Restaurante r : restaurantes) {
                    if (!r.getLocalizacion().isEmpty()) {
                        if (r.getLocalizacion().contains(", ")) {
                            String[] part = r.getLocalizacion().split(", ");
                            double part1 = Double.parseDouble(part[0]);
                            double part2 = Double.parseDouble(part[1]);
                            LatLng temp = new LatLng(part1, part2);

                            MarkerOptions markerOptions = new MarkerOptions()
                                    .position(temp)
                                    .title(r.getNombre())
                                    .snippet(r.getId())
                                    .draggable(false);
                            Marker marker = mMap.addMarker(markerOptions);
                            marker.showInfoWindow();
                        } else {
                            String[] part = r.getLocalizacion().split(",");
                            double part1 = Double.parseDouble(part[0]);
                            double part2 = Double.parseDouble(part[1]);
                            LatLng temp = new LatLng(part1, part2);

                            MarkerOptions markerOptions = new MarkerOptions()
                                    .position(temp)
                                    .title(r.getNombre())
                                    .snippet(r.getId())
                                    .draggable(false);
                            Marker marker = mMap.addMarker(markerOptions);
                            marker.showInfoWindow();
                        }
                    } else if (r.getLocalizacion().isEmpty() || r.getLocalizacion() == null){
                        Toast.makeText(ctx, "No hay localizacion en el restaurante", Toast.LENGTH_LONG).show();
                    }
                }
            }
        });
        LatLng test = new LatLng(37.3654742,-5.9900533);
        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(test, 13));
        mapUIConfig();
    }

    private void mapUIConfig() {
        mMap.getUiSettings().setMyLocationButtonEnabled(false);
        mMap.getUiSettings().setMapToolbarEnabled(false);

        mMap.setOnMarkerClickListener(new GoogleMap.OnMarkerClickListener() {
            @Override
            public boolean onMarkerClick(Marker marker) {
                mListener.onClickView(marker.getSnippet());
                System.out.println();
                return true;
            }
        });

    }
}
