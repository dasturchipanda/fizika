import React, { useEffect, useState } from 'react';
import api from '../../components/axios.jsx';


const Reality = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/amaliy')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Xatolik:', err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      setMessage('❗ Iltimos, sarlavha va fayl tanlang.');
      return;
    }

    const formData = new FormData();
    formData.append('amaliy_title', title);
    formData.append('amaliy_file', file);

    try {
      await api.post('/amaliy', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('✅ Muvaffaqiyatli yuklandi!');
      setTitle('');
      setFile(null);
    } catch (err) {
      console.error(err);
      setMessage('❌ Xatolik yuz berdi');
    }
  };

  return (
    <div className='reality'>
      <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="mb-4 text-center">Amaliy Fayl Yuklash</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Sarlavha</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Amaliy sarlavha"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fayl tanlang</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Yuborish
                </button>
                {message && (
                  <div className="alert alert-info text-center mt-3 mb-0">
                    {message}
                  </div>
                )}
              </form>
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
    </div>
  );
};

export default Reality;
