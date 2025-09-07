// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form "submit"
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been recorded.`);
    setFormData({ name: '', email: '', message: '' }); // reset form
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: '2rem', maxWidth: '600px', margin: '0 auto' },
  heading: { fontSize: '2rem', color: '#cc0000', marginBottom: '1rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.8rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' },
  textarea: { padding: '0.8rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px', minHeight: '100px' },
  button: { padding: '0.8rem', fontSize: '1rem', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
};

export default Contact;
