
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://hafsa:hafsa123@cluster0.c06brr4.mongodb.net/test";

module.exports = function () {
    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);
    const db = mongoose.connect(mongoDB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    console.log('Successfully Connected To MongoDB.')
    mongoose.connection.on('error', (err) => {
        console.log(
            'Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red
        );
    });
    return db;
};