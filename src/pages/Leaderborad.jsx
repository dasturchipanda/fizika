import React, { useEffect, useState } from 'react';
import api from '../components/axios.jsx';

const Leaderborad = () => {
  const [results, setResults] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/liders') // Hamma resultlarni olamiz
      .then((res) => {
        const data = res.data;
        setResults(data);

        // Unikal fanlar ro'yxatini ajratib olamiz
        const subjects = [...new Set(data.map((item) => item.subject_name))];
        setSubjectList(subjects);

        if (subjects.length > 0) {
          setSelectedSubject(subjects[0]); // Default tanlov
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Xatolik:', err);
        setLoading(false);
      });
  }, []);

  // Filterlangan natijalar
  const filtered = results
    .filter((r) => r.subject_name === selectedSubject)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // top 10

  return (
    <div className="test-page">
      <div className="container mt-4">
        <h1 className="text-center fw-bold mb-4">🏆 Yetakchilar Jadvali</h1>

        {loading ? (
          <p className="text-center">Yuklanmoqda...</p>
        ) : (
          <>
            <div className="mb-4 text-center">
              <select
                className="form-select w-50 m-auto"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {subjectList.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <p className="text-center">
                📭 Bu fan bo‘yicha hali hech kim test yechmagan.
              </p>
            ) : (
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>F.I.Sh.</th>
                    <th>Fan</th>
                    <th>Ball / Savollar</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.user_firstname} {item.user_lastname}</td>
                      <td>{item.subject_name}</td>
                      <td>{item.score} / {item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Leaderborad;
