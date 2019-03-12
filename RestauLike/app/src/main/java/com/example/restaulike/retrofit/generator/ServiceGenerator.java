package com.example.restaulike.retrofit.generator;

import java.io.IOException;

import okhttp3.Credentials;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.logging.HttpLoggingInterceptor;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ServiceGenerator {

    private static final String BASE_URL = " https://polar-spire-63445.herokuapp.com/" ;

    // http://localhost:9000

    public static String MASTER_KEY = "amHYZKF0WVOSBgUaGTRJyFvAl0yAzVhl";

    private static Retrofit.Builder builder =
            new Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create());

    private static Retrofit retrofit = null;
    private static TipoAuth tipoActual = null;

    private static HttpLoggingInterceptor logging =
            new HttpLoggingInterceptor()
                    .setLevel(HttpLoggingInterceptor.Level.BODY);

    private static OkHttpClient.Builder httpClientBuilder =
            new OkHttpClient.Builder();

    public static <S> S createService(Class<S> serviceClass) {
        return createService(serviceClass, null, TipoAuth.SIN_AUTENTICAR);
    }
    public static <S> S createService(Class<S> serviceClass, String token) {
        return createService(serviceClass, token, TipoAuth.JWT);
    }

    public static <S> S createService(Class<S> serviceClass, String email, String password) {
        if (!(email.isEmpty() || password.isEmpty())) {
            String credentials = Credentials.basic(email, password);
            return createService(serviceClass, credentials, TipoAuth.BASIC);
        }
        return createService(serviceClass, null, TipoAuth.SIN_AUTENTICAR);
    }


    public static <S> S createService(Class<S> serviceClass, final String authtoken, final TipoAuth tipo) {

        if (retrofit == null || tipoActual != tipo ) {

            httpClientBuilder.interceptors().clear();

            httpClientBuilder.addInterceptor(logging);

            httpClientBuilder.addInterceptor(new Interceptor() {
                @Override
                public Response intercept(Chain chain) throws IOException {
                    Request original = chain.request();

                    Request request = original.newBuilder()
                            .header("User-Agent", "LoginApp")
                            .header("Accept", "application/json")
                            .method(original.method(), original.body())
                            .build();

                    return chain.proceed(request);
                }
            });

            if (tipo == TipoAuth.SIN_AUTENTICAR|| tipo == TipoAuth.BASIC ) {
                // Añadimos el interceptor de la master key
                httpClientBuilder.addInterceptor(new Interceptor() {
                    @Override
                    public Response intercept(Chain chain) throws IOException {
                        Request original = chain.request();
                        HttpUrl originalUrl = original.url();

                        HttpUrl url = originalUrl.newBuilder()
                                .addQueryParameter("access_token", MASTER_KEY)
                                .build();

                        Request request = original.newBuilder()
                                .url(url)
                                .build();


                        return chain.proceed(request);
                    }
                });
            }

            if (authtoken != null) {


                httpClientBuilder.addInterceptor(new Interceptor() {
                    @Override
                    public Response intercept(Chain chain) throws IOException {
                        Request original = chain.request();

                        String token = null;
                        if (tipo == TipoAuth.JWT && !authtoken.startsWith("Bearer "))
                            token = "Bearer " + authtoken;
                        else
                            token = authtoken;


                        Request request = original.newBuilder()
                                .header("Authorization", token)
                                .build();

                        return chain.proceed(request);
                    }
                });
            }

            tipoActual = tipo;

            builder.client(httpClientBuilder.build());
            retrofit = builder.build();
        }

        return retrofit.create(serviceClass);
    }
}
