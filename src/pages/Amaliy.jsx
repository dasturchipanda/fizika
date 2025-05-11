// AmaliyList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AmaliyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/amaliy')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Xatolik:', err);
      });
  }, []);

  return (
    <>
    <div className="container py-5 mt-5">
      <h2 className="text-center mb-4">Amaliy Mashg‘ulotlar</h2>

      <div className="row g-4">
        {/* Maqsad */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Maqsad</h5>
              <p className="card-text">
                Talabalarning ijtimoiy-axborot kompetentligini rivojlantirish
                jarayonida nazariy bilimlarni amaliyotda qo‘llash, zamonaviy
                dasturiy ta’minot vositalaridan samarali foydalanish ko‘nikmalarini
                shakllantirish va mustahkamlash.
              </p>
            </div>
          </div>
        </div>

        {/* Vazifasi */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Vazifasi</h5>
              <ul>
                <li>
                  Talabalarning dasturiy vositalardan foydalanish bo‘yicha
                  ko‘nikmalarini mustahkamlash.
                </li>
                <li>
                  Olingan bilimlarni amaliy jarayonda qo‘llashni ta’minlash.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bajarish tartibi */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary">Bajarish tartibi</h5>
              <ol>
                <li>Mashg‘ulot mavzusi bilan tanishish.</li>
                <li>Kerakli dasturiy vositalarni ishga tushirish.</li>
                <li>Topshiriqlarni bosqichma-bosqich bajarish.</li>
                <li>Natijalarni tahlil qilib, xulosa chiqarish.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Yo‘riqnoma */}
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-info">Yo‘riqnoma</h5>
              <p>
                Amaliy mashg‘ulotni bajarish uchun yuqoridagi ko‘rsatmalarni yuklab oling va ularni ko‘rsatilgan ketma-ketlikda bajaring. Har bir bosqichni aniq tushunib, amaliyotni muvaffaqiyatli bajarishga harakat qiling.
              </p>
              <button className="btn btn-dark">
                <i className="bi bi-download"></i> Yuklab olish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container my-4">
  <div className="bg-white p-4 rounded shadow-sm">
    <h2 className="mb-4 text-dark fw-bold fs-4 border-bottom pb-2">
      Amaliy Mashg'ulotlar
    </h2>
    {data.map((item, index) => (
      <div key={index} className="mb-3 p-3 rounded border shadow-sm bg-light">
        <p className="mb-1">
          <strong>Sarlavha:</strong> {item.amaliy_title}
        </p>
        <a
          href={`http://localhost:9000${item.amaliy_file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm"
        >
          <i className="bi bi-file-earmark-arrow-down"></i> Faylni ochish
        </a>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default AmaliyList;
