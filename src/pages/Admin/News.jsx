import React, { useState } from 'react';
import api from '../../components/axios.jsx';


const News = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tizimda xatoliklarni tekshirish
    if (!title || !desc || !image) {
      setError("Barcha maydonlarni to‘ldiring");
      return;
    }

    const formData = new FormData();
    formData.append('news_title', title);
    formData.append('news_description', desc);
    formData.append('news_image', image);

    try {
      // Backendga yuborish
      const res = await api.post('/news', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('✅ Yangilik muvaffaqiyatli qo‘shildi');
      setError('');
      setTitle('');
      setDesc('');
      setImage(null);
    } catch (err) {
      setError('❌ Xatolik: ' + err.message);
      setSuccess('');
    }
  };

  return (
    <div className='newsadmin'>
      <div className="container mt-5">
        <h2 className="mb-4">🛠️ Yangilik Qo‘shish (Admin)</h2>
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Sarlavha</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Yangilik sarlavhasi"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tavsif</label>
            <textarea
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Yangilik haqida"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Rasm</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary">Saqlash</button>
        </form>
      </div>
    </div>
  );
};

export default News;
