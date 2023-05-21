const mongoose = require("mongoose");

const { Schema } = mongoose;

const farmerSchema = new Schema({
    farmer_id: {
        type: String,
        required: true,
    },
    
    farmer_name: {
        type: String,
        required: true,
    },
    
    farmer_cpf: {
        type: String,
        required:true,
    },
    farmer_street_address: {
        type: String,
        required:true,        
    },
    farmer_cep:{
        type: String,
        required:true,  
    },
    farmer_neighbourhood:{
        type: String,
        required:true,  
    },
    farmer_city:{
        type: String,
        required:true,  
    },
    farmer_phone_number:{
        type: String,
        required:true,  
    },
    farmer_email:{
        type: String,
        required:true,  
    },
    farmer_password:{
        type: String,
        required:true,  
    },
    isfarmer:{
        type: Boolean,
        required:true,  
    }
}, 

    {timestamps: true}

);

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports= {
    Farmer,
    farmerSchema
};