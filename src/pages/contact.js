import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import '../css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    workPhone: '',
    companyName: '',
    subject: '',
    comment: ''
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });

    return () => {
      navLinks.forEach(link => link.removeEventListener('click', () => {}));
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

    emailjs.send(serviceID, templateID, formData, apiKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('Error submitting form. Please try again later.');
      });
  };

  return (
    <main id="contact">
      <Helmet>
        <title>Bridge Suite-Contact Us</title>
      </Helmet>
      <section className="container">
        <div className="headquarters">
          <h2>Headquarters</h2>
          <div className="headquarters-grid">
            <div className="office">
              <h3>India</h3>
              <p>E-138, Sector 63 Noida, Uttar Pradesh 201301</p>
            </div>
            <div className="office">
              <h3>USA</h3>
              <p>2715 Calle De La Loma, Pleasanton CA 94566</p>
            </div>
            <div className="office">
              <h3>UAE</h3>
              <p>Impact Hub, Souk Al-Bahar Downtime Dubai</p>
            </div>
            <div className="office">
              <h3>Africa</h3>
              <p>Abacus House, General Mathenge Road P.O. Box 38938 - 00623 - Parklands Nairobi, Kenya</p>
            </div>
            <div className="inquiries">
            <h3>For Inquiries</h3>
            <p>(+91) 888-2709-959</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get in touch with us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="work-email">Work Email:</label>
              <input type="email" id="work-email" name="workEmail" value={formData.workEmail} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="work-phone">Work Phone:</label>
              <input type="tel" id="work-phone" name="workPhone" value={formData.workPhone} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="company-name">Company Name:</label>
              <input type="text" id="company-name" name="companyName" value={formData.companyName} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Question / Comment:</label>
              <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
