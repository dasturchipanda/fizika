// AmaliyList.jsx
import React, { useEffect, useState } from "react";
import api from "../components/axios.jsx";
import { useTranslation } from "react-i18next";

const AmaliyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/amaliy")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }, []);
  const { t } = useTranslation();
  

  return (
    <>
      <div className="container py-5 mt-5">
        <h2 className="text-center mb-4">{t("amaliy")}</h2>

        <div className="row g-4">
          {/* Maqsad */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("maqsad")}</h5>
                <p className="card-text">
                  {t("maqsad_text")}
                </p>
              </div>
            </div>
          </div>

          {/* Vazifasi */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("vazifa")}</h5>
                <ul>
                  <li>
                    {t("v_txt1")}
                  </li>
                  <li>
                    {t("v_txt2")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bajarish tartibi */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{t("bajarish")}</h5>
                <ol>
                  <li>{t("bajarish_text1")}</li>
                  <li>{t("bajarish_text2")}</li>
                  <li>{t("bajarish_text3")}</li>
                  <li>{t("bajarish_text4")}</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Yo‘riqnoma */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">{t("yoriqnoma")}</h5>
                <p>
                  {t("yoriqnoma_text")}
                </p>
                <button className="btn btn-dark">
                  <i className="bi bi-download"></i> {t("yuklash")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="mb-4 text-dark fw-bold fs-4 border-bottom pb-2">
            {t("amaliy")}
          </h2>
          {data.map((item, index) => (
            <div
              key={index}
              className="mb-3 p-3 rounded border shadow-sm bg-light"
            >
              <p className="mb-1">
                <strong>Sarlavha:</strong> {item.amaliy_title}
              </p>
              <a
                href={`${item.amaliy_file.replace(
                  "/upload/",
                  "/upload/fl_attachment/"
                )}`}
                download
                className="btn btn-outline-primary btn-sm"
              >
                <i className="bi bi-file-earmark-arrow-down"></i> Yuklab olish
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AmaliyList;
