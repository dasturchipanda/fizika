import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Lang from "../../components/Lang/Lang";
import {
  IoIosNotificationsOutline,
  IoMdMenu,
  IoIosClose,
} from "react-icons/io";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const { t } = useTranslation();
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  
  const handleLinkClick = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { path: "/", label: t("asosiy") },
    { path: "/nazariy", label: t("nazariy") },
    { path: "/amaliy", label: t("amaliy") },
    { path: "/nazorat", label: t("nazorat") },
    { path: "/glossariy", label: "Glossariy" },
    { path: "/reyting", label: t("lider") },
  ];

  return (
    <div className="home shadow">
      <div className="container-fluid container-lg">
        <div className="home-inner d-flex justify-content-between align-items-center py-3">
          {/* Mobile Sidebar */}
          <nav className={`wraper-nav ps-3 ${open ? "" : "minus"}`}>
            <IoIosClose className="closer" onClick={handleLinkClick} />
            <Link to="/" className="navlink" onClick={handleLinkClick}>
              <span className="logo-text">Fizika CSPU</span>
            </Link>
            <ul className="nav">
              {menuItems.map((item, i) => (
                <li className="navlist" key={i}>
                  <NavLink
                    to={item.path}
                    className="navlink"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <button
                onClick={handleLogout}
                className="btn btn-danger mt-2 w-50"
              >
                {t("logout")}
              </button>
            </ul>
          </nav>

          {/* Mobile Top Bar */}
          <div className="home-logo d-flex align-items-center justify-content-center gap-2">
            <IoMdMenu
              className="burger"
              size={30}
              onClick={() => setOpen(!open)}
            />
            <Link to="/" className="navlink" onClick={handleLinkClick}>
              <span className="logo-text">Fizika CSPU</span>
            </Link>
          </div>

          {/* Desktop Navbar */}
          <ul className="kattaul">
            {menuItems.map((item, i) => (
              <li className="navlist-katta" key={i}>
                <NavLink to={item.path} className="navlink">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="rsude d-flex align-items-center justify-content-center">
            <Lang />
            <NavLink
              to="news"
              className="nofication text-dark bg-white p-2 border border-1 rounded-circle"
            >
              <span className="nofic-number"></span>
              <IoIosNotificationsOutline size={24} />
            </NavLink>
            <button
              onClick={handleLogout}
              className="btn btn-danger d-none d-lg-block ms-2"
            >
              {t("logout")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
