package udem.edu.com.sensores;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    EditText txtid, txttitulo, txtvalor, txtfecha;
    Button btnEnviar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txtid = findViewById(R.id.txtid);
        txttitulo = findViewById(R.id.txttitulo);
        txtvalor = findViewById(R.id.txtvalor);
        txtfecha = findViewById(R.id.txtfecha);
        btnEnviar = findViewById(R.id.btnEnviar);

        btnEnviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                LeerTemperatura();
                LeerHumedad();
            }
        });

    }

    private void LeerTemperatura() {

        String url = "https://my-json-server.typicode.com/ijrios/prueba/1";

        StringRequest postResquest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    txtid.setText(jsonObject.getInt("id"));
                    txttitulo.setText(jsonObject.getString("title"));
                    txtvalor.setText(jsonObject.getInt("value"));
                    txtfecha.setText(jsonObject.getString("fecha"));


                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("Error", error.getMessage());
            }
        });
        Volley.newRequestQueue(this).add(postResquest);
    }


    private void LeerHumedad() {

        String url = "https://my-json-server.typicode.com/ijrios/prueba/2";

        StringRequest postResquest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    txtid.setText(jsonObject.getInt("id"));
                    txttitulo.setText(jsonObject.getString("title"));
                    txtvalor.setText(jsonObject.getInt("value"));
                    txtfecha.setText(jsonObject.getString("fecha"));


                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("Error", error.getMessage());
            }
        });
        Volley.newRequestQueue(this).add(postResquest);
    }
}