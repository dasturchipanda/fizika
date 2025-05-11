import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Malumotlar</h4>
          <ul className="links">
            <li><Link to={'/footer'}>Fizika Web haqida</Link></li>
            <li><Link to={'/footer'}>Umumiy malumotlar</Link></li>
            <li><Link to={'/footer'}>Glossary</Link></li>
            <li><Link to={'/footer'}>FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Sahifalar</h4>
          <ul className="links">
            <li><Link to={'/footer'}>Nazariy Mashg'ulotlar</Link></li>
            <li><Link to={'/footer'}>Amaliy Mashg'ulotlar</Link></li>
            <li><Link to={'/footer'}>Nazorat ishlari</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Ijtimoiy tarmoqlar</h4>
          <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;