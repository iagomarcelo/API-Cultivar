const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },
    product_name:   {
        type: String,
        required: true,
    },
    product_category:   {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    // farmer_id:  {
    //     type:  String,
    //     required: true,
    // },
    product_manufacturing_date: {
        type: Date,
        required: true,
    },
    product_expiration_date: {
        type: Date,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    product_status: {
        type: Boolean,
        required: true,
    },
    
},

{timestamps: true}

);

const Product = mongoose.model("Product", productSchema);

module.exports= {
    Product,
    productSchema
};