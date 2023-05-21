const mongoose = require("mongoose");

require('custom-env').env()
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;

async function main(){
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.lifzaow.mongodb.net/?retryWrites=true&w=majority`);

        console.log("Conectado ao banco!");

    } catch (error){
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;