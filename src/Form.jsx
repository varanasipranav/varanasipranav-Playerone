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

    // Replace this with your actual Google Form URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

    // Replace entry.xxxxxx with your actual entry IDs from Google Form
    const data = new FormData();
    data.append('entry.1234567890', formData.ign);       // In-Game Name
    data.append('entry.2345678901', formData.igid);      // In-Game ID
    data.append('entry.3456789012', formData.email);     // Email
    data.append('entry.4567890123', formData.whatsapp);  // WhatsApp Number
    data.append('entry.5678901234', formData.name);      // Name

    fetch(googleFormURL, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    }).then(() => {
      alert('Submitted Successfully!');
      setFormData({
        ign: '',
        igid: '',
        email: '',
        whatsapp: '',
        name: ''
      });
    }).catch((error) => {
      console.error('Error!', error.message);
    });
  };

  return (
    <div className='formdiv'>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='Registration-Heading'>Pixel Gaming</h2>
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