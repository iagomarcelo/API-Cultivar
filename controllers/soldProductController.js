const {SoldProduct: soldProductModel} = require("../models/SoldProduct");
const {Customer: customerModel} = require("../models/Customer");
const {Farmer: farmerModel} = require("../models/Farmer");
const {Product: productModel} = require("../models/Product");




const soldProductController = {
    
    create: async(req, res) => {
        try{


            const soldProduct = await soldProductModel.aggregate([
                {
                  $lookup: {
                    from: 'farmers', // The name of the posts collection
                    localField: 'farmer_id',
                    foreignField: '_id',
                    as: 'teste',
                  },
                },
              ]);
            

            res.status(201).json({soldProduct, msg: "sold Product created succesfully!"});

        } catch (error) {

            console.log(error);
        }
    },

    getAll: async(req, res) => {
        try{
            const soldProduct = await soldProductModel.aggregate([
                {
                  $lookup: {
                    from: "farmers", // The name of the posts collectionmodels/Farmer.js
                    localField: "farmer_id",
                    foreignField: "farmer_id",
                    as: "farmer",
                  },
                },
                {
                    $unwind: '$farmer'
                },
              ]);

            res.status(200).send({success: true, msg: "ok", data: soldProduct});
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
            res.status(404).json({msg: "S oldProduct not found."});
            return;
        };

        res.status(200).json({soldProduct, msg: "sold Product updated succesfully."});
    },

}

module.exports = soldProductController;