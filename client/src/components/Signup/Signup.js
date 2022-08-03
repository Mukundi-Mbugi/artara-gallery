import React from 'react'
import { useState } from 'react'
import "./Signup.css"
import "../../App.css";
import logo from './logo.png'

function Signup() {
  
    const [artist, setArtist] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const artist = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        fetch(`http://localhost:3000/login`,{
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(artist)
        }).then(res => res.json())
        .then(data => {
          setArtist(data);
          if(data.error){
            setError(data.error)
          } else {
            localStorage.setItem('token', data.token)
            window.location.href = '/'
          }
        })
    }
    const handleSignup = (e) => {
      e.preventDefault();

      const artist = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }
      fetch(`http://localhost:3000/artists`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({artist})
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          setError(data.error);
        } else {
          setHasAccount(true);
        }
      })
    };
  return (
    <div className="sign-div">
        <form>
            <img src={logo} alt="logo" className="logo" />
            <div className="inputs-div">
                <label>Name</label>
                <input type="text" id="name" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="inputs-div">
                <label>Email</label>
                <input type="email" id="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="inputs-div">
                <label>Password</label>
                <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="inputs-div">
                <label>Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>
            <div className="error-div">
                <label>{error}</label>
            </div>
            {/* <div className="submit-div">
                <button type="submit">Submit</button>
            </div> */}
            <div className="class-btn">
          <div className="error_div">
            <p className="error">{error}</p>
          </div>
          {hasAccount ? (
            <div className="sign-text">
              <button onClick={handleLogin}>Sign in</button>
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
              <button onClick={handleSignup}>Sign up</button>
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
  )
}

export default Signup