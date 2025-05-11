import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import flag_usa from "../../../public/photos/flag_usa.png";
import flag_rus from "../../../public/photos/flag_rus.png";
import flag_uzb from "../../../public/photos/flag_uzb.png";

const Lang = () => {
  const { t } = useTranslation();

  const languages = [
    { code: "en", lang: "English" },
    { code: "ru", lang: "Russian" },
    { code: "uz", lang: "Uzbek" },
  ];

  const { i18n } = useTranslation();

  const chengeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between bg-white rounded-circle me-2 p-2"
        onClick={handleToggle}
        style={{ cursor: "pointer", zIndex : 998 }}
      >
        <CiGlobe className="person-icon " />
      </div>
      {isOpen ? (
        <div className="lang-selector">
          <button className="lang-btn" onClick={() => chengeLanguage("en")}>
            <img src={flag_usa} alt="flag" width={26} height={16} />
            <span className="ms-2">English</span>
          </button>
          <button className="lang-btn" onClick={() => chengeLanguage("ru")}>
            <img src={flag_rus} alt="flag" width={26} height={16} />
            <span className="ms-2">Russian</span>
          </button>
          <button className="lang-btn" onClick={() => chengeLanguage("uz")}>
            <img src={flag_uzb} alt="flag" width={26} height={16} />
            <span className="ms-2">Uzbek</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Lang;
