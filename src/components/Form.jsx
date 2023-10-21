import React from 'react';
import styles from './Form.module.css';
import bpa_img from '../assets/BPA.png';

function Form() {
  return (
    <div className={styles['centered-container']}>
      <div className={styles['text-left']}>
        <img src = {bpa_img}></img>
        <h3>FREE & Online (LIVE only) Webinar on</h3>
        <h1>
          E-commerce Career Consultation:<br />
          Growth & Opportunities
        </h1>
        <h2>By Ex Flipkart & Amazon Professional</h2>
        <h4> 🗓️ 27th & 28th October, 2023, 5 PM IST</h4>
      </div>
    </div>
  );
}

export default Form;
