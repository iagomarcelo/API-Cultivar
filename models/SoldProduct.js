const mongoose = require("mongoose");

const { Schema } = mongoose;


const soldProductSchema = new Schema({
    // product_id: {
    //     type: String,
    //     required: true
    // },
    farmer_id:  {
        type: String,
        required: true,
    },
    // customer_id:  {
    //     type:  String,
    //     required: true,
    // },
    
},

{timestamps: true}


);

const SoldProduct = mongoose.model("SoldProduct", soldProductSchema);

module.exports= {
    SoldProduct,
    soldProductSchema,
};
