import React, { useState } from "react";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (password !== passwordAgain) {
            setErrorMessage("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:3500/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data); // Handle successful registration
                // Redirect or show success message
            } else {
                setErrorMessage(data.message); // Display error message
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Internal Server Error");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3500/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data); // Handle successful login
                // Redirect or handle logged in state
            } else {
                setErrorMessage(data.message); // Display error message
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Internal Server Error");
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
                        <form onSubmit={handleRegistration}>
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
                                placeholder="Email"
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
                            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                            <button type="submit" className="loginButton">
                                Sign Up
                            </button>
                        </form>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                className="loginInput"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                            <button type="submit" className="loginButton">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
