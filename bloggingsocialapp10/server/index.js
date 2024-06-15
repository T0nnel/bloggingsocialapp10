const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./config'); // Assuming User model is defined in config.js

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to handle user registration
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "Username not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // Here you might generate a JWT token for authentication

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
