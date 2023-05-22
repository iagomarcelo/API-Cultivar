const mongoose = require("mongoose");

const { Schema } = mongoose;

const soldProductSchema = new Schema({
    sell_id:{
        type: String,
        required:true
    },
    selling_date: {
        type: Date,
        required:true
    },
    pickup_adress: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    // product_id: {
    //     type: String,
    //     required: true
    // },
    // farmer_id:  {
    //     type: String,
    //     required: true,
    // },
    // customer_id:  {
    //     type:  String,
    //     required: true,
    // }
},

{timestamps: true}


);

const SoldProduct = mongoose.model("SoldProduct", soldProductSchema);

module.exports= {
    SoldProduct,
    soldProductSchema,
};
