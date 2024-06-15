import React, { useState } from "react";
import "./login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3500/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.text();
            console.log(data); // Handle response accordingly
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
                type="email"
                placeholder="Email"
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
              <button type="submit" className="loginButton">
                Log In
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                <a href="/register">Create a New Account</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
