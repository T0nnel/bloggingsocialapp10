const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const collection = require("./config.js"); // Make sure this is correctly importing your database collection
const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Route to render signup form
app.get("/register", (req, res) => {
    res.render("register");
});

// Route to handle user registration
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const existingUser = await collection.findOne({ name: username });
        if (existingUser) {
            return res.send("User already exists");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await collection.insertOne({ name: username, password: hashedPassword });

        res.send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Route to render login form
app.get("/", (req, res) => {
    res.render("login");
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await collection.findOne({ name: username });
        if (!user) {
            return res.send("Username not found");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.render("home");
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log("Server running on Port " + PORT);
});
