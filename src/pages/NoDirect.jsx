import React from "react";
import { Link } from "react-router-dom";

const NoDirect = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-subtitle">Kechirasiz, sahifa topilmadi!</p>
      <Link to="/" className="notfound-btn">Bosh sahifaga qaytish</Link>
    </div>
  );
};

export default NoDirect;
