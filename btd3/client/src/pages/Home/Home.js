import React from 'react';
import '../../App.css'
import './Home.css';
import DashboardSection from '../../components/DashboardSection/DashboardSection';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <DashboardSection /> 
      <Footer />
    </>
  );
}
 
export default Home;
