import React from "react";
import "./About.css";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="about-content">
          <button className="about-category">Get Started</button>
          <h1 className="about-heading">Contact Us</h1>
          <p className="about-subtext">
            Get in touch with us, We're here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {" "}
              {/* Changed from col-lg-10 to col-12 */}
              <form>
                <div className="row g-4">
                  {/* Name */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom rounded-0"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control border-0 border-bottom rounded-0"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom rounded-0"
                      placeholder="Phone Number (optional)"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 border-bottom rounded-0"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 d-flex justify-content-start mt-4">
                    <button
                      type="submit"
                      className="btn btn-dark rounded-pill px-5 py-2 btn-contact"
                    >
                      Leave us a Message →
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - Text */}
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase small fw-semibold">Contact Info</p>
              <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                We are always happy
                <br />
                to assist you
              </h2>
            </div>

            {/* Right side - Details */}
            <div className="col-md-6 contact-text">
              <p className="mb-2">
                <strong>Whatsapp:</strong> +91 9870151564
              </p>
              <p className="mb-2">
                <strong>Email id:</strong> contact@Bhavrib.com
              </p>
              <p className="mb-2">
                <strong>Address:</strong> Adarsh Nagar, Delhi 110033
              </p>
              <p className="text-muted">www.Bhavrib.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
