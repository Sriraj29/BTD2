import React ,{ useEffect } from 'react';
import '../../App.css'
import './Home.css';
import DashboardSection from '../../components/DashboardSection/DashboardSection';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('btd-token');
  useEffect(() => { 
    if(token == null){
      navigate("/")
    }
  });

  return (
    <>
      <Navbar />
      <DashboardSection /> 
      <Footer />
    </>
  );
}
 
export default Home;
