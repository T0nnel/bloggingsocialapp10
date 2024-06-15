const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb+srv://<username>:<password>@cluster0.eyeqbwd.mongodb.net/<dbname>?retryWrites=true&w=majority");

// Connect to database
connect.then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection error: ", err);
});

// Define schema
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", loginSchema);

module.exports = collection;
