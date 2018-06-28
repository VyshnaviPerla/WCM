package com.example.vyshnaviperla.mobileapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class user extends AppCompatActivity {
    private static Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user);
    }

    public void logout(View v) {
        Intent intent = new Intent(user.this, MainActivity.class);
        startActivity(intent);

    }
}