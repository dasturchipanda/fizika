import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import api from "../../components/axios.jsx";

const Register = () => {
  const [user_email, setUser_email] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [user_password, setUser_password] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ageyear, setAgeyear] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendCode = async () => {
    try {
      await api.post("/send-code", { user_email });
      setCodeSent(true);
      setError("Tasdiqlash kodi yuborildi!");
    } catch (err) {
      setError("Kod yuborilmadi: " + (err.response?.data?.error || err.message));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!user_email || !user_password || !firstname || !lastname || !ageyear || !code) {
      setError("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const res = await api.post("/register", {
        user_email,
        user_password,
        user_firstname: firstname,
        user_lastname: lastname,
        user_ageyear: ageyear,
        code
      });

      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-3">Ro'yxatdan o'tish</h2>

        {error && <div className="alert alert-warning">{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={user_email}
              onChange={(e) => setUser_email(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          {!codeSent ? (
            <button
              type="button"
              className="btn btn-outline-primary w-100 mb-3"
              onClick={sendCode}
            >
              Tasdiqlash kodini yuborish
            </button>
          ) : (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Emailga kelgan 6 xonali kod"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={user_password}
                  onChange={(e) => setUser_password(e.target.value)}
                  placeholder="Parol"
                  required
                />
                <div
                  className="text-end mt-1"
                  style={{ cursor: "pointer", fontSize: "0.9em" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} Parolni ko‘rsatish
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Ism"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Familiya"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  value={ageyear}
                  onChange={(e) => setAgeyear(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Ro'yxatdan o'tish
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
