//Parte del Servidor
const express=require('express');
const app=express();
app.use(express.json());
//Parte de DynamoDB
var AWS = require("aws-sdk");
const res = require("express/lib/response");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",//Direccion de mi base de datos 
    "accessKeyId": "AKIA5LGKX2WGROUUP4MB", "secretAccessKey": "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"//Credenciales de acceso de mi usuario
};
AWS.config.update(awsConfig);
var data_final=new Object();
let docClient = new AWS.DynamoDB.DocumentClient();
app.get('/', (req,res) => {
    res.send('NODE JS api');
});
var cont=1;
app.get('/api/Data', (req,res) =>{
    var params = {TableName: "DHT",Key: {"Sensor_Id": cont.toString(10)}};
    cont=cont+1;
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("error - " + JSON.stringify(err, null, 2));
        }
        else {
            data_final={"Sensor_Id": data.Item.Sensor_Id,"Temperature": data.Item.Temperature,"Humidity": data.Item.Humidity};
            res.send(data_final);
            
        }
    })
});

const port=process.env.port || 80;
app.listen(port,() => console.log(`Escuchando en puerto ${port}...`))
