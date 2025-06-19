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
  
    // Basic validation checks
    if (!formData.name.trim()) {
      alert('Name cannot be empty.');
      return;
    }
  
    // Email format validation
    const emailRegex = /.+@.+/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // WhatsApp number validation (exactly 10 digits)
    const whatsappRegex = /^\d{10}$/;
    if (!whatsappRegex.test(formData.whatsapp)) {
      alert('WhatsApp number must be exactly 10 digits.');
      return;
    }
  
    // If all validations pass, proceed with form submission
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLScP2snRBTRghgwwspXbAUGBAUjqpKNEI-zi01S1rL87IbWpyA/formResponse';
  
    const data = new FormData();
    data.append('entry.545003216', formData.ign);        // In-Game Name
    data.append('entry.114428379', formData.igid);       // In-Game ID
    data.append('entry.1936596211', formData.email);     // Email
    data.append('entry.965818943', formData.whatsapp);   // WhatsApp Number
    data.append('entry.610761749', formData.name);       // Name
  
    fetch(googleFormURL, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    }).then(() => {
      alert('✅ Submitted');
      setFormData({
        ign: '',
        igid: '',
        email: '',
        whatsapp: '',
        name: ''
      });
    }).catch((error) => {
      console.error('❌ Error!', error.message);
    });
  };

  return (
    <div className='formdiv'>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='Registration-Heading'>Player One</h2>
        <p className="title">Register</p>
        <div className="flex">
          <label>
            <input
              className="input"
              type="text"
              name="ign"
              value={formData.ign}
              onChange={handleChange}
              required
            />
            <span>In-Game Name</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              name="igid"
              value={formData.igid}
              onChange={handleChange}
              required
            />
            <span>In-Game ID</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="number"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
          <span>WhatsApp Number</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span>Name</span>
        </label>

        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
