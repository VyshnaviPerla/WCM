package com.example.vyshnaviperla.mobileapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private static EditText username;
    private static EditText password;
    private static Button button;
    int attempt_counter=5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        LoginButton();
    }

    public void LoginButton() {
        username = (EditText) findViewById(R.id.username);
        password = (EditText) findViewById(R.id.password);
        button = (Button) findViewById(R.id.button);

    }



    public void sign_in(View v) {

        if (username.getText().toString().equals("Vyshu") &&
                password.getText().toString().equals("Vyshu")) {
            Toast.makeText(this, "Username and password is correct",
                    Toast.LENGTH_SHORT).show();
            Intent intent = new Intent(MainActivity.this,user.class);
            startActivity(intent);



        } else {
            Toast.makeText(this, "Username and password is NOT correct",
                    Toast.LENGTH_SHORT).show();



            button.setEnabled(false);
        }}



}