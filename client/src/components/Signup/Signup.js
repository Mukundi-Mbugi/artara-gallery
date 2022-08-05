import React from "react";
import { useState } from "react";
import "./Signup.css";
import "../../App.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/Dashboard");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/Dashboard");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };
  return (
    <div className="sign-div">
      <form>
        <img src={logo} alt="logo" className="logo" />
        <div className="inputs-div">
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs-div">
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs-div">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputs-div">
          <label>Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="class-btn">
          <div className="error_div">
            <div className="error">
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </div>
          </div>
          {hasAccount ? (
            <div className="sign-text">
              <button onClick={handleLogin}>
                {isLoading ? "Loading..." : "Login"}
              </button>
              <p id="sign">
                Don't have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign Up
                </span>
              </p>
            </div>
          ) : (
            <div className="sign-text">
              <button onClick={handleSignup}>
                {isLoading ? "Loading..." : "Sign Up"}
              </button>
              <p>
                Have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign in
                </span>
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;
