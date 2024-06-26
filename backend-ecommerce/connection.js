require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.poqao0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionStr, {})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})


mongoose.connection.on('error',err=>{
    console.log(err);
})
// oJ8vaBGLaNZ5crof
// ecommerce-hub 

