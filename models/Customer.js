const mongoose = require("mongoose");

const { Schema } = mongoose;

const customerSchema = new Schema({
    customer_id: {
        type: String,
        required: true,
    },
    
    customer_name: {
        type: String,
        required: true,
    },
    
    customer_cpf: {
        type: String,
        required:true,
    },
    customer_street_address: {
        type: String,
        required:true,        
    },
    customer_cep:{
        type: String,
        required:true,  
    },
    customer_neighbourhood:{
        type: String,
        required:true,  
    },
    customer_city:{
        type: String,
        required:true,  
    },
    customer_phone_number:{
        type: String,
        required:true,  
    },
    customer_email:{
        type: String,
        required:true,  
    },
    customer_password:{
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

const Customer = mongoose.model("Customer", customerSchema);

module.exports= {
    Customer,
    customerSchema
};