import React, { useState } from 'react';
import './Partners.css'; // Import your CSS file if needed


const Partners = () => {
    
    return (
    <section id='partners' className='Partners'>
        <center>
        <h1 className='parttitle'>Partners</h1>
        </center>
      <div className='divpart'>
     
        <div className='chabeb'>
            <center>
            <img className='chabebimg' src='assest/chabeb.png'></img>
            
            </center>
        </div>
        <div>
            <center>
            <img  className='maison'  src='assest/maison.png'></img>
            
            </center>
        </div>
        <div>
            <center>
            <img  className='energie'   src='assest/energie.png'></img>
            
            </center>
        </div>
        <div>
            <center>
            <img  className='library'   src='assest/library.png'></img>
            
            </center>
            
        </div>
      </div>
      </section>
    );
  };
  
export default Partners;
  