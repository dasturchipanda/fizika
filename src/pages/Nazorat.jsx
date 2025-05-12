// src/TestPage.jsx
import React, { useState, useEffect } from "react";
import * as jwt_decode from "jwt-decode";
import api from "../components/axios.jsx";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Link } from "react-router-dom";

const TestPage = () => {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/grouptests")
      .then((res) => {
        setTestData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching test questions:", err);
        setLoading(false);
      });
  }, []);

  const [selectedSubject, setSelectedSubject] = useState("");
  const [started, setStarted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 soat = 3600s
  const [result, setResult] = useState(null);

  const handleStart = () => {
    const subject = testData.find((s) => s.subject_name === selectedSubject);
    setCurrentQuestions(subject?.questions || []);
    setStarted(true);
    setAnswers({});
    setTimeLeft(3600);
    setResult(null);
  };

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) finishTest();
  }, [started, timeLeft]);

  const handleOptionChange = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const finishTest = () => {
    let score = 0;
    currentQuestions.forEach((q) => {
      if (answers[q.id] === q.correct_option) score++;
    });
    setResult(score);
    setStarted(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 mx-auto text-center test-page">
      <h1 className="fs-1 fw-bold mb-4 pt-3 pb-3">Test Sahifasi</h1>

      {!started && result === null && (
        <>
          <div class="container">
            <div class="row ">
              <div class="preview-card">
                <div class="preview-card__wrp">
                  <div class="preview-card__item">
                    <div class="preview-card__img">
                      <img src="img/test-img.png" alt="Test" />
                    </div>
                    <div class="preview-card__content">
                      <div class="preview-card__title">
                        Mavzulashtirilgan Testlar
                      </div>
                        <select
                          value={selectedSubject}
                          onChange={(e) => setSelectedSubject(e.target.value)}
                          className="form-select m-auto w-75"
                        >
                          <option value="">Fan tanlang</option>
                          {testData.map((s, idx) => (
                            <option key={idx} value={s.subject_name}>
                              {s.subject_name}
                            </option>
                          ))}
                        </select>
                      <span class="preview-card__code mt-2">
                        Agarda testlarda boyich muammo yoki xatoliklar yuzaga
                        kelsa iltimos <Link to={"support"}>Support</Link> bilan
                        bog'laning{" "}
                      </span>
                      <a
                        href="#"
                        class="preview-card__button"
                        disabled={!selectedSubject}
                        onClick={handleStart}
                      >
                        Boshlash
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {started && (
        <div className="mt-4">
          <p className="text-danger fw-semibold mb-3">
            Vaqt: {formatTime(timeLeft)}
          </p>
          {currentQuestions.map((q, idx) => (
            <div key={q.id} className="card p-3 mb-3 shadow-sm text-start">
              <p className="fw-bold mb-2">
                {idx + 1}. {q.question}
              </p>
              {["A", "B", "C", "D"].map((opt) => (
                <div className="form-check" key={opt}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => handleOptionChange(q.id, opt)}
                    id={`${q.id}-${opt}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`${q.id}-${opt}`}
                  >
                    {q[`option_${opt.toLowerCase()}`]}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={finishTest}
            className="btn btn-success mt-4 px-5 fw-bold"
          >
            Tugatish
          </button>
        </div>
      )}

      {result !== null && (
        <div className="text-center mt-5">
          <h2 className="fw-bold text-success mb-3">
            {selectedSubject} fanidan natijangiz:
          </h2>

          {/* Progress bar */}
          <div
            className="progress w-75 mx-auto mb-4"
            style={{ height: "30px", backgroundColor: "#e5e7eb" }}
          >
            <div
              className={`progress-bar ${
                result > 0 ? "bg-success" : "bg-danger"
              } fw-bold`}
              role="progressbar"
              style={{
                width: `${(result / currentQuestions.length) * 100}%`,
                minWidth: "50px",
              }}
            >
              {result} / {currentQuestions.length} ball
            </div>
          </div>

          {/* Donut Chart */}
          <div className="w-50 mx-auto">
            <Doughnut
              data={{
                labels: ["To‘g‘ri", "Noto‘g‘ri"],
                datasets: [
                  {
                    data: [result, currentQuestions.length - result],
                    backgroundColor: ["#198754", "#dc3545"], // Bootstrap green, red
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      color: "#333",
                      font: { size: 14 },
                    },
                  },
                },
                cutout: "70%",
              }}
            />
          </div>
          <button className="btn bg-secondary text-light mt-2">
            Qaytadan boshlash
          </button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
