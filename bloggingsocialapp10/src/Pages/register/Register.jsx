import React, { useState } from "react";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState(""); // Added email state
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordAgain) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:3500/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }), // Include email in the body
            });

            const data = await response.text();
            console.log(data); // For demonstration, handle response according to your needs
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Snapgram</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you using Snapgram
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Username"
                                className="loginInput"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email" // Email input field
                                className="loginInput"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="loginInput"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password Again"
                                className="loginInput"
                                value={passwordAgain}
                                onChange={(e) => setPasswordAgain(e.target.value)}
                                required
                            />
                            <button type="submit" className="loginButton">
                                <a href="/">Sign Up</a>
                            
                            </button>
                            <button className="loginRegisterButton">
                                <a href="/login">Log into Account</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
