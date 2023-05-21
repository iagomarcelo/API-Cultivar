const {Customer: customerModel} = require("../models/Customer");

const customerController = {
    
    create: async(req, res) => {
        try{

            const customer = {
                customer_id: req.body.customer_id,
                customer_name: req.body.customer_name,
                customer_cpf: req.body.customer_cpf,
                customer_street_address: req.body.customer_street_address,
                customer_cep: req.body.customer_cep,
                customer_neighbourhood: req.body.customer_neighbourhood,
                customer_city: req.body.customer_city,
                customer_phone_number: req.body.customer_phone_number,
                customer_email: req.body.customer_email,
                customer_password: req.body.customer_password,
                isfarmer: false
            };

            const response = await customerModel.create(customer);

            res.status(201).json({response, msg: "Customer created succesfully!"});

        } catch (error) {

            console.log(error);
        }
    },

    getAll: async(req, res) => {
        try{
            const customers = await customerModel.find();

            res.json(customers);
        } catch (error){
            console.log(error);
        }
    },

    get: async(req, res) => {
        try{
            const id = req.params.id;
            const customer = await customerModel.findById(id);

            if(!customer) {
                res.status(404).json({msg: "Customer not found."});
                return;
            }

            res.json(customer);
        } catch (error){
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const customer = await customerModel.findById(id);

            if (!customer) {
                res.status(404).json({msg: "Customer not found"});
                return;
            }

            const deletedCustomer = await customerModel.findByIdAndDelete(id);

            res.status(200).json({deletedCustomer, msg: "Customer deleted succesfully"});

        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) => {
        const id = req.params.id;

        const customer = {
            customer_id: req.body.customer_id,
            customer_name: req.body.customer_name,
            customer_cpf: req.body.customer_cpf,
            customer_street_address: req.body.customer_street_address,
            customer_cep: req.body.customer_cep,
            customer_neighbourhood: req.body.customer_neighbourhood,
            customer_city: req.body.customer_city,
            customer_phone_number: req.body.customer_phone_number,
            customer_email: req.body.customer_email,
            customer_password: req.body.customer_password,
            //isfarmer: false
        };

        const updatedCustomer = await customerModel.findByIdAndUpdate(id, customer);
        

        if (!updatedCustomer) {
            res.status(404).json({msg: "Customer not found."});
            return;
        };

        res.status(200).json({customer, msg: "Customer updated succesfully!"});
    },

}

module.exports = customerController;