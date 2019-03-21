package com.example.restaulike.ui.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.restaulike.R;
import com.example.restaulike.model.Restaurante;
import com.example.restaulike.interactionListeners.RestauranteInteractionListener;
import com.example.restaulike.viewModel.RestauranteViewModel;

import java.util.List;


public class MyRestaurantesRecyclerViewAdapter extends RecyclerView.Adapter<MyRestaurantesRecyclerViewAdapter.ViewHolder> {

    private RestauranteViewModel viewModel;
    private List<Restaurante> mValues;
    private final RestauranteInteractionListener mListener;
    private Context ctx;


    public MyRestaurantesRecyclerViewAdapter(Context ctx, List<Restaurante> lRestaurantes, RestauranteInteractionListener rListener, int layout) {
        mValues = lRestaurantes;
        mListener = rListener;
        this.ctx = ctx;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.fragment_restaurantes, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, int position) {
         holder.restaurante = mValues.get(position);
         holder.nombre.setText(holder.restaurante.getNombre());
        holder.calle.setText(holder.restaurante.getCalle());
        holder.horario.setText(holder.restaurante.getHorario());

        holder.mView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (null != mListener) {
                    mListener.onClickView(holder.restaurante.getId());
                }
            }
        });
    }

    public void setNuevoRestaurante(List<Restaurante> restaurantes){
        this.mValues = restaurantes;
        notifyDataSetChanged();
    }

    @Override
    public int getItemCount() {
        return mValues.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        public final View mView;
        public final TextView nombre;
        public final TextView calle;
        public final TextView horario;
        public Restaurante restaurante;

        public ViewHolder(View view) {
            super(view);
            mView = view;
            nombre = (TextView) view.findViewById(R.id.nombre);
            calle = (TextView) view.findViewById(R.id.calle);
            horario = view.findViewById(R.id.horario_rest);
        }

        @Override
        public String toString() {
            return super.toString();
        }
    }
}
