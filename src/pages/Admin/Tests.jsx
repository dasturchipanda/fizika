import React, { useEffect, useState } from "react";
import axios from "axios";

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [form, setForm] = useState({
    subject_name: "",
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_option: "A",
  });
  const [filterSubject, setFilterSubject] = useState("");
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [newSubjectMode, setNewSubjectMode] = useState(false);

  const fetchTests = async () => {
    try {
      const res = await axios.get("http://localhost:9000/api/tests");
      setTests(res.data);

      // Unique fanlar
      const subjects = [...new Set(res.data.map((t) => t.subject_name))];
      setAvailableSubjects(subjects);
    } catch (error) {
      console.error("Error fetching tests:", error);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId
      ? `http://localhost:9000/api/tests/${editId}`
      : "http://localhost:9000/api/tests";
    const method = editId ? "put" : "post";

    try {
      await axios[method](url, form);
      setMessage(editId ? "Tahrirlandi!" : "Yangi test qo‘shildi!");
      setForm({
        subject_name: "",
        question: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        correct_option: "A",
      });
      setEditId(null);
      setNewSubjectMode(false);
      fetchTests();
    } catch (error) {
      console.error("Xatolik:", error);
      setMessage("Xatolik yuz berdi.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Ushbu testni o‘chirishga ishonchingiz komilmi?")) return;
    try {
      await axios.delete(`http://localhost:9000/api/tests/${id}`);
      setMessage("Test o‘chirildi!");
      fetchTests();
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  const handleEdit = (test) => {
    setForm(test);
    setEditId(test.id || test._id);
    setNewSubjectMode(false);
    window.scrollTo(0, 0);
  };

  const filteredTests = filterSubject
    ? tests.filter((t) => t.subject_name.toLowerCase().includes(filterSubject.toLowerCase()))
    : tests;

  return (
    <div className="test-admin">
      <div className="container py-5">
        <h2 className="mb-4 text-center">Testlar Boshqaruvi</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
          <div className="row g-3">
            <div className="col-md-6">
              {newSubjectMode ? (
                <input
                  type="text"
                  className="form-control"
                  name="subject_name"
                  placeholder="Yangi fan nomi"
                  value={form.subject_name}
                  onChange={handleInputChange}
                />
              ) : (
                <select
                  className="form-select"
                  name="subject_name"
                  value={form.subject_name}
                  onChange={handleInputChange}
                >
                  <option value="">Fanni tanlang...</option>
                  {availableSubjects.map((subj, idx) => (
                    <option key={idx} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setNewSubjectMode(!newSubjectMode);
                  setForm({ ...form, subject_name: "" });
                }}
              >
                {newSubjectMode ? "Fan tanlashga qaytish" : "Yangi fan qo‘shish"}
              </button>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                name="question"
                placeholder="Savol matni"
                value={form.question}
                onChange={handleInputChange}
              />
            </div>

            {["option_a", "option_b", "option_c", "option_d"].map((opt, i) => (
              <div className="col-md-6" key={i}>
                <input
                  type="text"
                  className="form-control"
                  name={opt}
                  placeholder={`Variant ${opt.split("_")[1].toUpperCase()}`}
                  value={form[opt]}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <div className="col-md-6">
              <label className="form-label">To‘g‘ri javob:</label>
              <select
                className="form-select"
                name="correct_option"
                value={form.correct_option}
                onChange={handleInputChange}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div className="col-12 d-grid">
              <button className="btn btn-primary" type="submit">
                {editId ? "Tahrirlash" : "Qo‘shish"}
              </button>
            </div>

            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </form>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Fan nomi bo‘yicha qidirish..."
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Fan</th>
                <th>Savol</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>To‘g‘ri</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filteredTests.map((t, index) => (
                <tr key={t.id || t._id}>
                  <td>{index + 1}</td>
                  <td>{t.subject_name}</td>
                  <td>{t.question}</td>
                  <td>{t.option_a}</td>
                  <td>{t.option_b}</td>
                  <td>{t.option_c}</td>
                  <td>{t.option_d}</td>
                  <td className="fw-bold">{t.correct_option}</td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-warning" onClick={() => handleEdit(t)}>
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDelete(t.id || t._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredTests.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center text-muted">
                    Testlar topilmadi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tests;
