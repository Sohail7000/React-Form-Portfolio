import React from 'react';
import styles from './Form.module.css';
import { useState } from 'react';
import bpa_img from '../assets/BPA.png';
import hero from '../assets/founder.png'
import axios from 'axios'

function Form() {
  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[profession , setProfession] = useState('');
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  



  // submit event

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      Name:name, Email: email, Phone: phone, Profession : profession
      
    }
    axios.post('https://sheet.best/api/sheets/dd6ba2b3-0f44-417d-ae22-c25dd7dd6c9e',data).then(response=>{
        console.log(response);
        setName('');
        setEmail('');
        setPhone('');
        setProfession('');
        setShowThankYouMessage(true);
        window.alert('Thank you for registering!');
        
      })
    }

    return (
      <>
        <div className={styles['centered-container']} >
          <div className={styles['text-left']}>
            <img className='logo' style ={{height : "110px"}} src={bpa_img} alt="Logo" />
            <h6>FREE & Online (LIVE only) Webinar on</h6>
            <h1 style={{ color: "rgb(1,162,212)"  ,fontWeight:"bold"  , fontSize:"35px"}}>
              E-commerce Career Consultation:<br />
              Growth & Opportunities
            </h1>
            <h6>By Ex Flipkart & Amazon Professional</h6>
            <br/>
            <h5> 🗓️ 27th & 28th October, 2023, 5 PM IST</h5>
  
            <br></br>
            <h1 style={{ color: "rgb(1,162,212)" , fontWeight : "bold" , margin : "0px" }}>Register Now</h1>
            <br></br>
            <form autoComplete="off" className='form-group' onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type='text'
                className='form-control'
                required
                placeholder='Your Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
  
              <br></br>

              <label>Your Profession</label>
              <input
                type='text'
                className='form-control'
                required
                placeholder='Your Profession'
                onChange={(e) => setProfession(e.target.value)}
                value={profession}
              />
  
              <br></br>
              <label>Your email</label>
              <input
                type='email'
                className='form-control'
                required
                placeholder='Your Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br></br>
              <label>Phone no.</label>
              <input
                type='tel'
                className='form-control'
                required
                placeholder='Phone No.'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                pattern="[0-9]{10}"
              />
              <br></br>
              <div style={{ display: "flex", }}>
                <button type='submit' className='btn btn-primary'>Save My Seat</button>
              </div>
              <div>
                {showThankYouMessage ? (
                  <div className={styles['thank-you-message']}>
                    Thank you for registering!
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
  
  
        <div style = {{marginTop : "0px"}}>
        {/* <div style = {{marginTop : "220px"}}> */}
            <h2  className = {styles['h2-style']}> Meet Your Host</h2>
            <img className = {styles['founder-image']}src={hero} alt="Founder Image"/>
            <p style={{ fontSize: "20px" }}>Prakash Maharaj</p>
            {/* <h5>Prakash Maharaj</h5> */}

            <h6>Founder & CEO,Blooprint Consulting</h6>
            <h6>Ex-Flipkart | Ecommerce Exp-13 years</h6>

            <h2 className = {styles['h2-style']}>About Blooprint Consulting </h2>
            {/* <h3>Founded by former Flipkart and Amazon employees in 2021 with a passion for helping businesses succeed in the online marketplace. Our total experience of over 30 years of working with a variety of e-commerce platforms and in various portfolios such as Operation, Category Management, Customer Shopping Experience, Planning, Merchandising, and Brand Management, has strengthened our knowledge and skills to help brands achieve their business goals.</h3> */}
            <p style={{ fontSize: "15px" }}>Founded by former Flipkart and Amazon employees in 2021 with a passion for helping businesses succeed in the online marketplace. Our total experience of over 30 years of working with a variety of e-commerce platforms and in various portfolios such as Operation, Category Management, Customer Shopping Experience, Planning, Merchandising, and Brand Management, has strengthened our knowledge and skills to help brands achieve their business goals.</p>
            <h2 className = {styles['h2-style']}>Who Is This For </h2>

            <ul>
              <li>Aspiring E-commerce Professionals</li>
              <li>Students and Recent Graduates</li>
              <li>Small Business Owners</li>
              <li>Career Changers</li>
              <li>Freelancers seeking e-commerce projects</li>
              <li>Individuals looking to restart carrier</li>
            </ul>
            

            <h2 className = {styles['h2-style']}>What We'll Cover </h2>
            <ul>
              <li>E-commerce Growth in India</li>
              <li>Opportunities In E-Commerce</li>
              <li>Different Job Roles in E-commerce</li>
              <li>Career Changers</li>
              <li>Free Lancing Opportunities in E-commerce</li>
              <li>International Opportunities in E-commerce</li>
            </ul>


        </div>
     
     
    </>
  );
}

export default Form;
