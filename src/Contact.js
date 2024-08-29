import React, { useState } from 'react';
import './contact.css'; // Import your CSS file if needed


const Contact = () => {
    
    return (
    <section className='contact'>
        <center><h1 className='conttitle'>Contact</h1></center>
        <div className='contdiv'>
            <form>
                <h1 className='get'>Get in <span style={{color:'#00B3D6'}}>Touch</span></h1>
                <h3 className='dont'>Don't be shy!</h3>
                <input placeholder='Name *' type='text'></input>
                <input placeholder='Email *' type='text'></input>
                <input placeholder='Phone *' maxLength={8} minLength={8} type='text'></input>
                <select>
                    <option className="styled-option">
                    How did you find us?
                    </option>
                    <option className="styled-option">Youtube</option>
                    <option className="styled-option">Facebook</option>
                    <option className="styled-option">Instagram</option>
                    <option className="styled-option">Twitter</option>
                    <option className="styled-option">LinkedIn</option>
                </select>
                <input type='submit' value={'send'}></input>
                <div>
                    <div>
                        <img>
                        </img>
                        <div>
                            <h2></h2>
                            <h3></h3>
                        </div>
                    </div>
                    <div>
                        <img>
                        </img>
                        <div>
                            <h2></h2>
                            <h3></h3>
                        </div>
                    </div>
                    <div>
                        <img>
                        </img>
                        <div>
                            <h2></h2>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </form>
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.356405765001!2d10.008526475512301!3d33.95767777319284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12557bac128d413d%3A0x4fa3ac4fb31f3b70!2sLocal%20JCI%20Metouia!5e0!3m2!1sfr!2stn!4v1724012844787!5m2!1sfr!2stn"
        width="30%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>        
      </div>
      <footer class="bg-body-tertiary text-center text-lg-start">
        <center>
  <div class="text-center p-3" >
    © 2020 Copyright:
    <a class="text-body" target='_blank' href="https://aymen-maaloul.vercel.app/"> Aymen maaloul</a>
  </div></center>
</footer>
      </section>
    );
  };
  
export default Contact;
  