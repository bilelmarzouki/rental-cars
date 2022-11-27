const mongoose = require('mongoose');
function connectDB(){
    mongoose.connect('mongodb+srv://bilelmarzouki:realmadrid1319@cluster0.1jv16.mongodb.net/sheycars-udemy',{useUnifiedTopology:true,useNewUrlParser:true})
    const connection = mongoose.connection
    connection.on("connected",()=>{
        console.log('Mongo DB connection Successfull')
    })


       connection.on('error',()=>{
        console.log('Mongo DB Connection erreur')
    })


}
module.exports=connectDB