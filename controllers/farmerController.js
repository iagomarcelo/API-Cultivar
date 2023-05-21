const {Farmer: farmerModel} = require("../models/Farmer");

const farmerController = {
    
    create: async(req, res) => {
        try{

            const farmer = {
                farmer_id: req.body.farmer_id,
                farmer_name: req.body.farmer_name,
                farmer_cpf: req.body.farmer_cpf,
                farmer_street_address: req.body.farmer_street_address,
                farmer_cep: req.body.farmer_cep,
                farmer_neighbourhood: req.body.farmer_neighbourhood,
                farmer_city: req.body.farmer_city,
                farmer_phone_number: req.body.farmer_phone_number,
                farmer_email: req.body.farmer_email,
                farmer_password: req.body.farmer_password,
                isfarmer: true
            };

            const response = await farmerModel.create(farmer);

            res.status(201).json({response, msg: "farmer created succesfully!"});

        } catch (error) {

            console.log(error);
        }
    },

    getAll: async(req, res) => {
        try{
            const farmers = await farmerModel.find();

            res.json(farmers);
        } catch (error){
            console.log(error);
        }
    },

    get: async(req, res) => {
        try{
            const id = req.params.id;
            const farmer = await farmerModel.findById(id);

            if(!farmer) {
                res.status(404).json({msg: "farmer not found."});
                return;
            }

            res.json(farmer);
        } catch (error){
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const farmer = await farmerModel.findById(id);

            if (!farmer) {
                res.status(404).json({msg: "farmer not found"});
                return;
            }

            const deletedfarmer = await farmerModel.findByIdAndDelete(id);

            res.status(200).json({deletedfarmer, msg: "farmer deleted succesfully"});

        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) => {
        const id = req.params.id;

        const farmer = {
            farmer_id: req.body.farmer_id,
            farmer_name: req.body.farmer_name,
            farmer_cpf: req.body.farmer_cpf,
            farmer_street_address: req.body.farmer_street_address,
            farmer_cep: req.body.farmer_cep,
            farmer_neighbourhood: req.body.farmer_neighbourhood,
            farmer_city: req.body.farmer_city,
            farmer_phone_number: req.body.farmer_phone_number,
            farmer_email: req.body.farmer_email,
            farmer_password: req.body.farmer_password,
            //isfarmer: false
        };

        const updatedService = await farmerModel.findByIdAndUpdate(id, farmer);

        if (!updatedService) {
            res.status(404).json({msg: "farmer not found."});
            return;
        };

        res.status(200).json({farmer, msg: "Serviço atualizado com sucesso."});
    },

}

module.exports = farmerController;