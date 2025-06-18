import './Form.css';
import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    ign: '',
    igid: '',
    email: '',
    whatsapp: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyq9UCbgqJq1LV7flfJyV1HxhpFkDkvWeVQ9eaoPimmX7jNIh7lvGQ5Lu3c2cswLRd7Pw/exec';
  
    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Change content type to application/json
      },
      body: JSON.stringify(formData), // Send data as JSON string
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("Form submitted successfully!");
        setFormData({ ign: '', igid: '', email: '', whatsapp: '', name: '' });
      })
      .catch(error => {
        alert("Submission failed");
        console.error("Error:", error);
      });
  };
  return (
    <div className='formdiv'>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='Registration-Heading'>Pixel Gaming</h2>
        <p className="title">Register</p>
        <div className="flex">
          <label>
            <input className="input" type="text" name="ign" value={formData.ign} onChange={handleChange} required />
            <span>In-Game Name</span>
          </label>
          <label>
            <input className="input" type="text" name="igid" value={formData.igid} onChange={handleChange} required />
            <span>In-Game ID</span>
          </label>
        </div>
        <label>
          <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} required />
          <span>Email</span>
        </label>
        <label>
          <input className="input" type="number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
          <span>WhatsApp Number</span>
        </label>
        <label>
          <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} required />
          <span>Name</span>
        </label>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
