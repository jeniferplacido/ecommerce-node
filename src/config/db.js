const mongoose = require ('mongoose')
require ('dotenv').config()


const connection = async ( )=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDb conectado com sucesso')
    }catch(error){
        console.error(error.message, 'Não foi possível conectar com o mongoDb')
        process.exit(1)
    }
    
}

module.exports = connection;