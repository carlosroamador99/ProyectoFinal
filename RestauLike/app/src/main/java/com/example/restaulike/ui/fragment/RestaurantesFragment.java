package com.example.restaulike.ui.fragment;

import android.arch.lifecycle.Observer;
import android.arch.lifecycle.ViewModelProviders;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.restaulike.R;
import com.example.restaulike.interactionListeners.RestauranteInteractionListener;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.ui.adapter.MyRestaurantesRecyclerViewAdapter;
import com.example.restaulike.viewModel.RestauranteViewModel;

import java.util.ArrayList;
import java.util.List;


public class RestaurantesFragment extends Fragment {

    private static final String ARG_COLUMN_COUNT = "column-count";
    private int mColumnCount = 1;
    private RestauranteInteractionListener mListener;
    private MyRestaurantesRecyclerViewAdapter adapter;
    private List<Restaurante> restauranteList;
    private RecyclerView recyclerView;
    private Context ctx;
    private RestauranteViewModel restauranteViewModel;

    public RestaurantesFragment() {
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_restaurantes_list, container, false);
        if (view instanceof RecyclerView) {
            Context context = view.getContext();
            recyclerView = view.findViewById(R.id.list);
            if (mColumnCount <= 1) {
                recyclerView.setLayoutManager(new LinearLayoutManager(context));
            } else {
                recyclerView.setLayoutManager(new GridLayoutManager(context, mColumnCount));
            }
            restauranteList = new ArrayList<>();
            adapter = new MyRestaurantesRecyclerViewAdapter(getActivity(), restauranteList, mListener, R.layout.fragment_restaurantes);
            recyclerView.setAdapter(adapter);
            lanzarViewModel();
            //recyclerView.setAdapter(new MyRestaurantesRecyclerViewAdapter(DummyContent.ITEMS, mListener));
        }
        return view;
    }

    private void lanzarViewModel() {
        restauranteViewModel = ViewModelProviders.of(getActivity()).get(RestauranteViewModel.class);
        restauranteViewModel.getListRestaurante().observe(getActivity(), new Observer<List<Restaurante>>() {
            @Override
            public void onChanged(@Nullable List<Restaurante> restaurantes) {
                adapter.setNuevoRestaurante(restaurantes);
            }
        });
    }


    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        this.ctx = context;
        if (context instanceof RestauranteInteractionListener) {
            mListener = (RestauranteInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnListFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }
}
