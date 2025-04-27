import React from "react";
import "./About.css";
import product from "../assets/image/product.jpg";

const AboutHome = () => {
  return (
    <>
      {/* hero section */}
      <section className="home-hero">
        <div className="about-content">
          <button className="about-category">Style</button>
          <h1 className="about-heading">Smart Shop, Live Better</h1>
          <p className="about-subtext">
            Redefine your winter wardrobe with the timeless elegance of winter
            whites with this style guide.
          </p>
        </div>
      </section>

      {/* card section */}
      <section className="text-center py-5">
        <h2 className="fw-normal display-5 mb-5">
          Our Exciting Coming Soon Product!
        </h2>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow rounded overflow-hidden text-white">
                <img src={product} className="card-img" alt="Product 1" />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50">
                  <h4 className="card-title mb-3">Product 1</h4>
                  <p className="w-75 card-text mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button className="btn btn-light fw-bold btn-card">
                    COMING SOON!
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow rounded overflow-hidden text-white">
                <img src={product} className="card-img" alt="Product 2" />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50">
                  <h4 className="card-title mb-3">Product 2</h4>
                  <p className="w-75 card-text mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button className="btn btn-light fw-bold btn-card">
                    COMING SOON!
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow rounded overflow-hidden text-white">
                <img src={product} className="card-img" alt="Product 3" />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50">
                  <h4 className="card-title mb-3">Product 3</h4>
                  <p className="w-75 card-text mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <button className="btn btn-light fw-bold btn-card">
                    COMING SOON!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* new banner and feature section */}
      <section className="py-5">
        <div className="container">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1574180045827-681f8a1a9622"
              className="img-fluid rounded w-100"
              alt="Mission Banner"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
              <h2 className="mb-3 fw-normal">
                We’re on a Mission To Clean Up the Industry
              </h2>
              <p>Read about our progress in our latest Impact Report.</p>
              <button className="btn btn-light fw-normal mt-3 btn-card-new">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="row text-center mt-5">
            <div className="col-md-4 mb-4">
              <div>
                <i className="bi bi-box fs-1 mb-3"></i>
                <h5 className="fw-normal">Complimentary Shipping</h5>
                <p className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div>
                <i className="bi bi-recycle fs-1 mb-3"></i>
                <h5 className="fw-normal">Consciously Crafted</h5>
                <p className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div>
                <i className="bi bi-geo-alt fs-1 mb-3"></i>
                <h5 className="fw-normal">Come Say Hi</h5>
                <p className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
