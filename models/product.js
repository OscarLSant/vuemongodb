const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String},
    precio: { type: Number}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;