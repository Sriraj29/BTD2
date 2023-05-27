import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
 
function Footer() { 
  return (
    <div className='footer-container'>    
      {/* <section className='social-media'> */}
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              BTD
            <i className="fa fa-solid fa-brain"/>
              
            </Link>
          </div>
          <small className='website-rights'>BTD © 2023</small>      
        </div>
      {/* </section> */}
    </div>
  );
}

export default Footer;
