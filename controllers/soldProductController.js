const {SoldProduct: soldProductModel} = require("../models/SoldProduct");

const soldProductController = {
    
    create: async(req, res) => {
        try{


            const soldProduct = {
                sell_id: req.body.sell_id,
                selling_date: req.body.selling_date,
                pickup_adress: req.body.pickup_adress,
                price: req.body.price,
                amount: req.body.amount,
                // product_id: req.body.product_id,
                // farmer_id: req.body.farmer_id,
                // customer_id: req.body.customer_id,
            };

            
            const response = await soldProductModel.create(soldProduct);

            res.status(201).json({response, msg: "sold Product created succesfully!"});

        } catch (error) {

            console.log(error);
        }
    },

    getAll: async(req, res) => {
        try{
            const soldProducts = await soldProductModel.find();

            res.json(soldProducts);
        } catch (error){
            console.log(error);
        }
    },

    get: async(req, res) => {
        try{
            const id = req.params.id;
            const soldProduct = await soldProductModel.findById(id);

            if(!soldProduct) {
                res.status(404).json({msg: "soldProduct not found."});
                return;
            }

            res.json(soldProduct);
        } catch (error){
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const soldProduct = await soldProductModel.findById(id);

            if (!soldProduct) {
                res.status(404).json({msg: "soldProduct not found"});
                return;
            }

            const deletedsoldProduct = await soldProductModel.findByIdAndDelete(id);

            res.status(200).json({deletedsoldProduct, msg: "soldProduct deleted succesfully"});

        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) => {
        const id = req.params.id;

        const soldProduct = {
            product_id: req.body.soldProduct_id,
            farmer_id: req.body.farmer_id,
            customer_id: req.body.customer_id

        };

        const updatedService = await soldProductModel.findByIdAndUpdate(id, soldProduct);

        if (!updatedService) {
            res.status(404).json({msg: "Sold Product not found."});
            return;
        };

        res.status(200).json({updatedService, msg: "sold Product updated succesfully."});
    },

}

module.exports = soldProductController;