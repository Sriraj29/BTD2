import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Patients from './pages/Patients/Patients';
import Test from './pages/Test/Test';
import Signup from './pages/Signup/Signup';
import Logout from './pages/Logout/Logout';
import Login from './pages/Login/Login';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
const [showLogin, setShowLogin]=useState(false);

  useEffect(() => {      
    if (showLogin===false)
    setShowLogin(true);
    else
    setShowLogin(false);
  }, [])
  
  return ( 
    <>
    {/* {showLogin===true?<Login/>: */}
      <Router>
   
        <Routes>
        <Route path='/' exact element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/password-reset' element={<PasswordReset/>} />
          <Route path='/forgotpassword:/id/:token' element={<ForgotPassword/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/test' element={<Test/>} />
          <Route path='/logout' element={<Logout/>} />
        </Routes>

      </Router>
       {/* } */}
    </>
  );
}

export default App;
