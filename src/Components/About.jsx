import React from "react";
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h2>About Us</h2>
        <p>
          Your ultimate destination for premium products, offering the best in
          electronics, fashion, and more. We’re dedicated to quality, reliability,
          and excellent customer service.
        </p>
      </header>

      <section className="about-mission">
        <h3>Our Mission</h3>
        <p>
          At LuxeStore, our mission is to provide an unparalleled shopping
          experience with top-notch products, competitive pricing, and outstanding
          customer support.
        </p>
      </section>

      <section className="about-values">
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We carefully curate our products to ensure you receive only the best.</li>
          <li><strong>Innovation:</strong> Staying ahead with the latest trends and technologies.</li>
          <li><strong>Customer First:</strong> Your satisfaction is at the core of everything we do.</li>
        </ul>
      </section>

      <section className="about-services">
        <h3>What We Offer</h3>
        <div className="services-list">
          <div className="service-item">
            <h4>Electronics</h4>
            <p>
              Discover the latest gadgets, smartphones, and home appliances to make life easier.
            </p>
          </div>
          <div className="service-item">
            <h4>Fashion</h4>
            <p>
              Explore trendy apparel and accessories to elevate your style game.
            </p>
          </div>
          <div className="service-item">
            <h4>Customer Support</h4>
            <p>
              Our dedicated support team is here to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>
          Thank you for choosing LuxeStore. We’re thrilled to have you
          as part of our community.
        </p>
      </footer>
    </div>
  );
};

export default About;
