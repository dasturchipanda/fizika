import React from "react";
import { Link } from "react-router-dom";
import "./assets.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const videoId = "rdOw_VSXbU4?si=-V-0vrpK5V3341MW";

  return (
    <div>
      <section className="hero section mt-5">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-lg-last hero-img"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <img
                src="/img/hero.png"
                className="img-fluid animated"
                alt="salom"
              />
            </div>
            <div
              className="col-lg-6  d-flex flex-column justify-content-center text-center text-md-start"
              data-aos="fade-in"
            >
              <h2 className="pb-2">{t("motiv")}</h2>
              <p>{t("motiv_text")}</p>
              <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                <Link to={"/nazariy"} className="download-btn">
                  <span>{t("nazariy")}</span>
                </Link>
                <Link to={"/amaliy"} className="download-btn">
                  <span>{t("amaliy")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-lg">
        <section className="container-fluid p-0 mb-4">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators d-none d-lg-flex">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="img/slider-1.png"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/slider-2.png"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/slider-3.png"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="fullscreen"
            title="YouTube Video"
          />
        </div>
      </div>

      <section id="contact" class="contact section">
        <div class="container section-title text-center" data-aos="fade-up">
          <h2 className="pt-5 fw-bold">{t("contact")}</h2>
          <p>
            {t("conatct_text")}
          </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class="info-item" data-aos="fade" data-aos-delay="200">
                    <CiLocationOn className="fs-2" />
                    <h3>Address</h3>
                    <p>Insitut Nomi</p>
                    <p>Toshkent viloyati, chirchiq</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="info-item" data-aos="fade" data-aos-delay="300">
                    <IoCallOutline className="fs-2" />
                    <h3>Telefon raqamlar</h3>
                    <p>+998 99 123 33 44</p>
                    <p>+998 99 123 44 33</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="info-item" data-aos="fade" data-aos-delay="400">
                    <MdOutlineMail className="fs-2" />
                    <h3>Email</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="info-item" data-aos="fade" data-aos-delay="500">
                    <IoMdTime className="fs-2" />
                    <h3>Ochiq kunlar</h3>
                    <p>Dushanba - Juma</p>
                    <p>8:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form
                action="#"
                method="post"
                class="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>

                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div class="col-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div class="col-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
