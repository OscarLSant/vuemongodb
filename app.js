// inicialización de express
const express = require('express');
const app = express();
const port = 3000;

// inicialización de mongodb
const mongoose = require('mongoose');
const user = 'userprueba';
const pass = 'userprueba';
const dbname = 'example';
const uri = `mongodb+srv://${user}:${pass}@cluster0.0q8op4d.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// inicialización de cors para permitir solicitudes http desde otros orígenes
const cors = require('cors');

app.use(cors());

// mensaje de comprobación de la ejecución del protocolo HTTP de express
app.listen(port, () =>{
    console.log('Escuchando peticiones')
});

// comprobación de conexión a la base de datos
mongoose.connect(uri).then(() => console.log("Conexión exitosa a MongoDB Atlas")).catch(e=>console.log(e));

// importación del módulo del modelo producto
const Product = require('./models/product');

app.get('/products', async (req, res) =>{
    try{
        const arrayProductosBD = await Product.find();
        res.json(arrayProductosBD);
        console.log(arrayProductosBD);
    }catch (e){
        console.log(e);
    }
})