// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/services" style={styles.link}>Services</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',     // Dark background
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default Navbar;
