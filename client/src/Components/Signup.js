import React, { useState } from "react";
import '../App.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"


export default function SignUp({ onLogin }) {
  const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        //   password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
        navigate("/dashboard")

    }
  
    return (
      // <p>Hello</p>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> */}
        <Button className='login-Btn' type="submit">
          Signup          
         </Button>
      </form>
    );
  }

