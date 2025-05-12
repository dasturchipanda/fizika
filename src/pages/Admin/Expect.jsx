import React, { useState, useEffect } from 'react';
import api from '../../components/axios.jsx';

const Expect = () => {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState('');
  const [testLink, setTestLink] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // 🔧 YouTube linkni embed formatga o‘zgartirish
  const getEmbedLink = (url) => {
    const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/;
    const match = url.match(regExp);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // fallback: agar noto‘g‘ri format bo‘lsa, asl linkni qaytaradi
  };

  // 🧲 Ma'lumotlarni olish
  const fetchLessons = async () => {
    try {
      const res = await api.get('/nazariy');
      setLessons(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Maʼlumotlarni yuklab boʻlmadi.');
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  // ➕ Yangi dars qo‘shish
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Fayl tanlanmagan!");

    const formData = new FormData();
    formData.append('nazariy_title', title);
    formData.append('nazariy_video', getEmbedLink(video));
    formData.append('nazariy_test', testLink);
    formData.append('nazariy_file', file);

    try {
      await api.post('/nazariy', formData);
      setMessage('Yangi dars muvaffaqiyatli qo‘shildi.');
      setTitle('');
      setVideo('');
      setTestLink('');
      setFile(null);
      fetchLessons();
    } catch (err) {
      console.error(err);
      setMessage('Yaratishda xatolik yuz berdi.');
    }
  };

  // ❌ Darsni o‘chirish
  const handleDelete = async (id) => {
    if (!window.confirm('Rostdan ham o‘chirmoqchimisiz?')) return;
    try {
      await api.delete(`/nazariy/${id}`);
      setMessage('Dars muvaffaqiyatli o‘chirildi.');
      fetchLessons();
    } catch (err) {
      console.error(err);
      setMessage('O‘chirishda xatolik yuz berdi.');
    }
  };

  return (
    <div className='expect'>
      <div className="container mt-5">
        <h2 className="mb-4">📚 Nazariy Darslar Admin Panel</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleCreate} className="mb-5">
          <div className="mb-3">
            <label className="form-label">Dars nomi</label>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">YouTube video havolasi</label>
            <input type="text" className="form-control" value={video} onChange={(e) => setVideo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Test havolasi</label>
            <input type="text" className="form-control" value={testLink} onChange={(e) => setTestLink(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Prezentatsiya fayli (PDF)</label>
            <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} accept="application/pdf" required />
          </div>
          <button type="submit" className="btn btn-primary">➕ Dars qo‘shish</button>
        </form>
        <h4>Mavjud darslar</h4>
        <ul className="list-group">
          {lessons.map((lesson) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={lesson.nazariy_id}>
              <span>{lesson.nazariy_title}</span>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(lesson.nazariy_id)}>🗑 O‘chirish</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expect;
