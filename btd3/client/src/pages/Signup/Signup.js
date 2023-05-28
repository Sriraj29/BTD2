import React, { useState } from "react";

import "../page.css";
import PWDRequisite from "../../components/PWDRequisite";
import { useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";
import { textFieldClasses } from "@mui/material";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // const navigation = useNavigate();
  const navigate = useNavigate();
  const [errorMessage, setError] = useState("");




  var loggedUser = {
    email,
    password,
    cpassword
  };

  //password strength
  const [pwdRequisite, setPWDRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  const handleOnFocus = (e) => {
    setPWDRequisite(true);
  };

  const handleOnBlur = (e) => {
    setPWDRequisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleSignUp = async () => {

console.log("signup");
 
      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password,
            cpassword
          })
        });
        const data = await response.json();
          
        if (response.ok) {
        
          navigate("/");
        } else {

          setError(data.error)
          throw new Error("Signup failed");
        }
      } catch (error) {
        console.error(error);
        // Handle the error
      }
    };




  
  return (
    <div className="container">
      <div className="text1">
        <div>
          <h1 className="title">SIGNUP</h1>
        </div>

        <form className="form-wrapper">
          <div className="name">
            {/* <label className="label">USERNAME:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="exampleInputName"
                placeholder="name"
              ></input> */}
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
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div>

            <div className="password1">
              <label className="label">CONFIRM PASSWORD:</label>
              <input
                type="password"
                className="input"
                name="password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onKeyUp={handleOnKeyUp}
                id="exampleInputPassword1"
                placeholder="password"
              ></input>
            </div>

            <div>
              {pwdRequisite ? (
                <PWDRequisite
                  capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                  numberFlag={checks.numberCheck ? "valid" : "invalid"}
                  pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                  specialCharFlag={
                    checks.specialCharCheck ? "valid" : "invalid"
                  }
                />
              ) : null}
            </div>
            <br></br>
            <br></br>

            <div>
              <button className="submit" type="button" onClick={handleSignUp}>
                SIGNUP
              </button>
              <p style={{color: "red",
    textAlign: "center",
    textTransform: "uppercase"}}>{errorMessage}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
