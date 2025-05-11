import { Link,  useNavigate} from "react-router-dom";
import gentra from "../../public/photos/gentra.png";
import logo from "../../public/photos/logo.png";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { PiChatCircleTextLight } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BiSolidDoorOpen } from "react-icons/bi";
import "./assets.css";

const Profile = () => {
  const localeToken = 'token'
  // const localeToken = JSON.parse(localStorage.getItem('token'));

  //   const navigate = useNavigate();
  
    const handleLogout = () => {
      // Tokenni localStorage dan o'chirish
      localStorage.removeItem("token");
  
      // Foydalanuvchini login sahifasiga yo'naltirish
      navigate("/login");
    };
  return (
    <>
      {localeToken ? (
        <div className="profile">
          <div className="container-fluid">
            <div className="profile-inner">
              {/*  Top Header */}
              <h1 className="text-center mt-4">Профиль</h1>
              <div className="stag-number shadow mt-4 bg-white rounded-3 px-4 py-2 d-flex align-items-center">
                <IoPersonOutline className="person-icon" />
                <div className="number-info ms-4">
                  <h3 className="m-0 p-0 fs-4">Стаг Сервис</h3>
                  <p className="m-0 p-0 fs-6">+998 91-444-00-00</p>
                </div>
              </div>
              {/* Tanlangan Mashina */}
              <div className="selected-car rounded-4 bg-white shadow py-2 px-3 text-center mt-3">
                <div className="car-toppings d-flex justify-content-between">
                  <h4>Gentra</h4>
                  <img src={logo} alt="Logo" />
                </div>
                <img
                  className="scar-img py-4"
                  src={gentra}
                  alt="Selected Car"
                />
              </div>
              {/* Feedback */}
              <div className="stag-number shadow mt-3 bg-white rounded-3 px-3 py-3">
                <div className="feedback pb-2 d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <PiChatCircleTextLight className="person-icon " />
                    <p className="m-0 p-0 ms-2">Связаться с нами</p>
                </div>
                <IoIosArrowForward className="icon-arrow"/>
                </div>

                <div className="feedback pt-2 d-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <PiTelegramLogoLight className="person-icon " />
                    <p className="m-0 p-0 ms-2">Связаться с нами</p>
                </div>
                <IoIosArrowForward className="icon-arrow"/>
                </div>
              </div>
            </div>
          </div>
          <div className="logout" onClick={handleLogout}>
            <BiSolidDoorOpen className="fs-3 mb-1"/>
            <p className="ps-2 d-inline-block">Выйти</p>
          </div>
        </div>
      ) : (
        <>
        {/* Login Qilinmagan Part */}
          <div className="warn-msg">
            <div className="d-flex justify-content-center align-items-center w-100 vh-100">
              <div className="card py-4 px-3">
                <h3>Sizda hali Tizimga kirmagansiz!</h3>
                <div className="links d-flex justify-content-around">
                <Link className="btn btn-primary"  to={'/register'}>Register</Link>
                <Link className="btn btn-primary" to={"/login"}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
