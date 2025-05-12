import React, { useState, useEffect } from 'react';
import api from "../components/axios.jsx";
import API_BASE_URL from '../components/base.jsx';

const Habarlar = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/news')
      .then(response => setNews(response.data))
      .catch(err => console.error("Error fetching news", err));
  }, []);

  return (
    <div className='test-page'>
      <div className="container py-5">
      <h2 className="mb-4 text-center">So‘nggi Yangiliklar</h2>
      <div className="row">
        {news.length === 0 ? (
          <p className="text-muted text-center">Yangiliklar mavjud emas</p>
        ) : (
          news.map((article, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                {article.news_image && (
                  <img
                    src={`${API_BASE_URL}${article.news_image}`}
                    className="card-img-top"
                    alt={article.news_title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.news_title}</h5>
                  <p className="card-text">{article.news_description}</p>
                  <div className="mt-auto">
                    <button className="btn btn-outline-primary btn-sm">Batafsil</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default Habarlar;
