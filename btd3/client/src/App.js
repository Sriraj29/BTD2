import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Signup from './pages/Signup/Signup';
import Logout from './pages/Logout/Logout';
import Login from './pages/Login/Login';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
