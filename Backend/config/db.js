const mongoose = require('mongoose');

exports.dbConn = async() => {
    try{
        const dbURL="mongodb+srv://anshupriya:anshupri@cluster0.tzai66f.mongodb.net/ecommerce?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error: ${err}`);
    }
}