package com.example.restaulike.ui.fragment;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;
import com.example.restaulike.R;
import com.example.restaulike.interactionListeners.UserInteractionListener;
import com.example.restaulike.retrofit.UtilToken;
import com.example.restaulike.ui.activity.DashBoardActivity;
import com.example.restaulike.ui.activity.MainActivity;


public class UserFragment extends Fragment {

    //private Fragment fragmentEditar;

    private Context ctx = getActivity();
    private String username;
    private String email;
    private String avatar;
    private UserInteractionListener mListener;

    private TextView tvEmail, tvUserName;
    private ImageView ivAvatar;
    private ImageButton deslogin;

    public UserFragment() {
        // Required empty public constructor
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        final View view = inflater.inflate(R.layout.fragment_user, container, false);
        username = UtilToken.getUsername(ctx);
        email = UtilToken.getEmail(ctx);
        avatar = UtilToken.getAvatar(ctx);

        tvUserName = view.findViewById(R.id.username);
        tvEmail = view.findViewById(R.id.email_user);
        ivAvatar = view.findViewById(R.id.image_user);

        deslogin = view.findViewById(R.id.deslogin);

        deslogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                UtilToken.setToken( getActivity() , null);
                Intent i = new Intent(
                        UserFragment.super.getContext(),
                        MainActivity.class
                );
                startActivity(i);
                getActivity().finish();
            }
        });

        String token = UtilToken.getToken(ctx);
            tvUserName.setText(username);
            tvEmail.setText(email);

            Glide
                    .with(ctx)
                    .load(avatar)
                    .into(ivAvatar);


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
        if (context instanceof UserInteractionListener) {
            mListener = (UserInteractionListener) context;
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

}
