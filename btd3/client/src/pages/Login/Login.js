import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Signup from "../Signup/Signup";
// import Home from "./Home";
import "../page.css";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import PasswordReset from "../PasswordReset/PasswordReset";
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
// import Box from "@mui/material/Box";
// import { toast } from "react-toastify";

function Login() {
  const [login, setLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotpass, setForgotpass] = useState("");

  const [errorMessage, setError] = useState("");
  //   const navigate = useNavigate();
  // const loginBackend = async () => {
  //   await fetch("http://localhost:3001/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     }),
  //   })

  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === "success") {
  //         alert("Login Success");
  //         localStorage.setItem("loggedInDetails", JSON.stringify(loggedUser));
  //         setLogin(true);
  //       } else {
  //         alert("Invalid Email or Password");
  //       }
  //     }

  //     )

  //     .catch((error) => {
  //       console.error("Error:", error);
  //     }
  //     );

  // }
  const navigate = useNavigate();

  const handleSignup = () => {
    setShowSignup(true);
  };
  if (showSignup) {
    navigate("/signup");
    // return <Signup />;
  }

  const handleForgotPassword = () => {
    setForgotpass(true);
  };
  if (forgotpass) {
    navigate("/password-reset");
    // return <ForgotPassword />;
  }

  var loggedUser = {
    // name,
    email,
    password,
  };

  
    
  
    const handleLogin = async () => {

      // try {
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }).then(async response => {
          const data = await response.json();
          if(response.status == 201) {
            sessionStorage.setItem('btd-token', data.result.token);
            navigate("/home");
          } else {
                setError(data.error)
                throw new Error("Login failed");
              }
        })


      //   if (response.ok) {
      //     const data = await response.json();
      //     // Handle the data or update the state accordingly
      //     sessionStorage.setItem('btd-token', data.result.token);
      //     navigate("/home");
      //   } else {
      //     setError(data.error)
      //     throw new Error("Login failed");
      //   }
      // } catch (error) {
      //   console.error(error);
      //   // Handle the error
      // }
    };


  return (
    <div className="container">
      <div className="text1">
        <div>
          <h1 className="title">LOGIN</h1>
        </div>

        <form className="form-wrapper">
          <div className="name">
            <div className="email">
              <label className="label">EMAIL:</label>
              <input
                type="email"
                className="input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                placeholder="email@email.com"
              ></input>
            </div>
            <div className="password">
              <label className="label">PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>
            <div className="link">
              <Button onClick={handleForgotPassword}>Forgot Password?</Button>
            </div>
            <div>
              <button className="submit" type="button" onClick={handleLogin}>
                LOGIN
              </button>

              <p style={{color: "red",
    textAlign: "center",
    textTransform: "uppercase"}}>{errorMessage}</p>
            </div>
            <div className="oops">
              {/* <Box
                sx={{
                  marginLeft: "90px",
                }}
              > */}
              <label className="account">Need an Account?</label>
              <Button onClick={handleSignup}>SIGN UP</Button>
              {/* </Box> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
