import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./auth.css";
import api from "../../components/axios.jsx";

const Login = () => {
  const [user_email, setUser_email] = useState("");
  const [user_password, setUser_password] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        user_email: user_email,
        user_password: user_password,
      });

      // Agar muvaffaqiyatli login bo'lsa, token saqlanadi
      const token = response.data.token
      localStorage.setItem("token", JSON.stringify(token));
      const decodedToken = jwt_decode.jwtDecode(token);
      if (decodedToken.role === "admin") {
        navigate("/admin");
      } else if (decodedToken.role === "user") {
        navigate("/");
      }
    } catch (err) {
      // Xatolik bo'lsa, xabarni saqlaymiz
      setError(err.response?.data?.error || err.message);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login">
        <div className="login-top bg-primary text-center rounded-bottom-4">
          <h1 className="logo-text fs-1 fw-bold pt-5 mb-3">Fizika CSPU</h1>
          <h2 className="m-0">Xush kelibsiz!</h2>
          <p className="pb-4">iltimos malumotlaringizni kiriting!</p>
        </div>
        <div className="login-inner container-fluid">
          <form className="text-center form" onSubmit={handleLogin}>
            <div className="form-input-wrapper">
              
              <input
                className="form-telinput mt-3"
                type="email"
                value={user_email}
                onChange={(e) => setUser_email(e.target.value)}
                placeholder="Email kiriting (user@example.com)"
                required
              />
            </div>
            <div className="form-input-wrapper">
              <div
                className="login-side-icons"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaRegEye className="icon-login-form" />
                ) : (
                  <FaRegEyeSlash className="icon-login-form" />
                )}
              </div>
              <input
                className="form-input mt-2"
                type={showPassword ? "text" : "password"}
                value={user_password}
                onChange={(e) => setUser_password(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="checker text-start mt-2 ">
              <label className="rules">Sizda akkaunt yo'qmi? <Link to={'/register'}>Yangi akkaunt ochish</Link></label>
            </div>
            <div className="checker text-start mt-2 ">
              <label className="rules">Parolingizni unutdingizmi? <Link to={'https://t.me/zdn_dev'}>Support</Link></label>
            </div>
            <button className="btn btn-primary w-75 mt-3" type="submit">Kirish</button>
          </form>
        </div>
      </div>

      {error && <p className="text-center" style={{ color: 'red' }}>Email yoki parol nog'ri kiritilgan iltimos qatadan tekshirib kiriting. Agarda Login qilishda muammolar yuzaga kelsa support bilan bo'laning!</p>}
    </>
  );
};

export default Login;
