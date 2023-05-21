const {Product: productModel} = require("../models/Product");

const productController = {
    
    create: async(req, res) => {
        try{

            const product = {
                product_id: req.body.product_id,
                product_name: req.body.product_name,
                product_category: req.body.product_category,
                product_price: req.body.product_price,
                // farmer_id: req.body.farmer_id,
                product_manufacturing_date: req.body.product_manufacturing_date,
                product_expiration_date: req.body.product_expiration_date,
                product_description: req.body.product_description,
                product_status: true,
            };

            const response = await productModel.create(product);

            res.status(201).json({response, msg: "Product created succesfully!"});

        } catch (error) {

            console.log(error);
        }
    },

    getAll: async(req, res) => {
        try{
            const products = await productModel.find();

            res.json(products);
        } catch (error){
            console.log(error);
        }
    },

    get: async(req, res) => {
        try{
            const id = req.params.id;
            const product = await productModel.findById(id);

            if(!product) {
                res.status(404).json({msg: "Product not found."});
                return;
            }

            res.json(product);
        } catch (error){
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const product = await productModel.findById(id);

            if (!product) {
                res.status(404).json({msg: "Product not found"});
                return;
            }

            const deletedProduct = await productModel.findByIdAndDelete(id);

            res.status(200).json({deletedProduct, msg: "Product deleted succesfully"});

        } catch (error) {
            console.log(error);
        }
    },

    update: async(req, res) => {
        const id = req.params.id;

        const product = {
            product_id: req.body.product_id,
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            // farmer_id: req.body.farmer_id,
            product_manufacturing_date: req.body.product_manufacturing_date,
            product_expiration_date: req.body.product_expiration_date,
            product_description: req.body.product_description,
            product_status: req.body.product_status,

        };

        const updatedService = await productModel.findByIdAndUpdate(id, product);

        if (!updatedService) {
            res.status(404).json({msg: "Product not found."});
            return;
        };

        res.status(200).json({product, msg: "Product updated succesfully."});
    },

}

module.exports = productController;