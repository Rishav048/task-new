import React from "react";
import "./About.css";

function AboutMain() {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <button className="about-category">Style</button>
          <h1 className="about-heading">About Us</h1>
          <p className="about-subtext">
            Redefine your winter wardrobe with the timeless elegance of winter
            whites with this style guide.
          </p>
        </div>
      </section>

      {/* New Made In India Section */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10">
              <div className="row justify-content-around">
                {/* Social Icons */}
                <div className="col-md-1 d-flex gap-4 justify-content-center">
                  <a href="#" className="text-dark mb-3">
                    <i className="bi bi-facebook fs-3"></i>
                  </a>
                  <a href="#" className="text-dark">
                    <i className="bi bi-instagram fs-3"></i>
                  </a>
                </div>

                {/* Text Content */}
                <div className="col-md-10">
                  <h2 className="fw-bold text-muted mb-4">
                    Made in India <br />
                    <span className="fw-bold">
                      “Handcrafted by artisans made for the world”
                    </span>
                  </h2>

                  <p className="mb-4">
                    At Bhavrib, we believe fashion is more than just
                    clothing—it’s a statement of artistry, sustainability, and
                    empowerment. Founded by Bhavri, a Paris-trained fashion
                    designer with a vision to redefine couture, our brand blends
                    timeless craftsmanship with modern elegance.
                  </p>

                  <p className="mb-4">
                    Rooted in sustainability, our philosophy is built on the
                    3E’s—Ethics, Environment, and Empowerment. We are committed
                    to ethical sourcing, eco-conscious production, and uplifting
                    skilled artisans, ensuring every piece is a harmonious blend
                    of tradition and innovation. Each creation is meticulously
                    handcrafted in India, reflecting centuries of craftsmanship
                    while embracing a future of conscious luxury.
                  </p>

                  <p>
                    where modern silhouettes meet timeless craftsmanship,
                    proving that style and sustainability can coexist. Each
                    creation is an expression of elegance, designed for those
                    who seek couture with a conscience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMain;
