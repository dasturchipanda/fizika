import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nazariy = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getEmbedLink = (url) => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};


  useEffect(() => {
    axios
      .get("http://localhost:9000/api/nazariy")
      .then((response) => {
        setLessons(response.data); // Ma'lumotlarni state ga yozish
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setError("Ma'lumotlarni olishda xatolik yuz berdi.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">{error}</div>;
  }

  return (
    <div className="mt-5">
      <div className="container py-5">
        <h1 className="text-center mb-5">
          <i className="bi bi-book"></i> Nazariy Darslar
        </h1>

        <div className="row gy-5">
          {lessons.map((lesson) => (
            <div className="col-12" key={lesson.nazariy_id}>
              <div className="p-4 bg-light rounded shadow-sm">
                <h3>{lesson.nazariy_title}</h3>
                <div className="d-flex flex-wrap align-items-center gap-3 my-3">
                  <a
                    href={`http://localhost:9000${lesson.nazariy_file}`}
                    target="_blank"
                    className="btn btn-primary btn-sm"
                    rel="noreferrer"
                  >
                    📄 Prezentatsiya
                  </a>
                  <Link to={"/nazorat"} className="btn btn-success btn-sm">
                    📝 Testni Yechish
                  </Link>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={getEmbedLink(lesson.nazariy_video)}
                    title={lesson.nazariy_title}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nazariy;
