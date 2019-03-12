package com.example.restaulike.retrofit;

import android.content.Context;
import android.content.SharedPreferences;

public class UtilToken {


    public static void setToken(Context mContext, String token){
        SharedPreferences sharedPreferences =
                mContext.getSharedPreferences(
                        "login",
                        Context.MODE_PRIVATE
                );
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString("JWT_KEY", token);
        editor.commit();
    }

    public static String getToken(Context mContext){
        SharedPreferences sharedPreferences = mContext.getSharedPreferences(
                "login",
                Context.MODE_PRIVATE
        );

        String jwt = sharedPreferences
                .getString("JWT_KEY", null);
        return jwt;
    }

    public static void setuserData(Context context, String username, String email, String avatar){
        SharedPreferences sharedPreferences = context.getSharedPreferences(
                "login",
                Context.MODE_PRIVATE
        );
        SharedPreferences.Editor editor = sharedPreferences.edit();
        // editor.putString("ID_USER", id);
        editor.putString("USER", username);
        editor.putString("EMAIL", email);
        editor.putString("AVATAR", avatar);
        editor.commit();
    }

    public static String getUsername(Context context){
        SharedPreferences sharedPreferences = context.getSharedPreferences(
                "login",
                Context.MODE_PRIVATE
        );

        String username = sharedPreferences
                .getString("USER", null);
        return username;
    }
    public static String getEmail(Context context){
        SharedPreferences sharedPreferences = context.getSharedPreferences(
                "login",
                Context.MODE_PRIVATE
        );

        String email = sharedPreferences
                .getString("EMAIL", null);
        return email;
    }
    public static String getAvatar(Context context){
        SharedPreferences sharedPreferences = context.getSharedPreferences(
                "login",
                Context.MODE_PRIVATE
        );

        String avatar = sharedPreferences
                .getString("AVATAR", null);
        return avatar;
    }
}

