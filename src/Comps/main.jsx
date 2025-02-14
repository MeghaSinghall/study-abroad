import React, { useState } from 'react';
import { Globe, Book, GraduationCap } from 'lucide-react';
import './style.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-bg"></div>
    <div className="hero-content">
      <h1>Study MBBS Abroad</h1>
      <p>Your Gateway to Global Medical Education</p>
      <button className="btn btn-white">Apply Now for MBBS Abroad</button>
    </div>
  </section>
);

const BenefitsSection = () => {
  const benefits = [
    { icon: <Globe size={48} />, title: "Global Recognition", description: "Internationally recognized degrees" },
    { icon: <Book size={48} />, title: "Quality Education", description: "World-class medical training" },
    { icon: <GraduationCap size={48} />, title: "Affordable Fees", description: "Cost-effective education options" },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section-title">Why Study MBBS Abroad?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountriesSection = () => {
  const countries = [
    { name: "Russia", description: "Leading medical universities with modern facilities" },
    { name: "Uzbekistan", description: "Quality education at affordable costs" },
    { name: "Kazakhstan", description: "Advanced medical infrastructure" },
    { name: "Philippines", description: "English-medium instruction" },
    { name: "Georgia", description: "European standard education" },
    { name: "Kyrgyzstan", description: "Affordable living costs" },
    { name: "Egypt", description: "Rich medical heritage and culture" }
  ];

  return (
    <section className="countries">
      <div className="container">
        <h2 className="section-title">Top Countries for MBBS</h2>
        <div className="countries-grid">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <h3>{country.name}</h3>
              <p>{country.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdmissionProcess = () => {
  const steps = [
    "Document Submission",
    "Eligibility Check",
    "University Selection",
    "Admission Letter",
    "Visa Processing",
    "Travel Arrangements"
  ];

  return (
    <section className="admission">
      <div className="container">
        <h2 className="section-title">Admission Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Preferred Country</label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                <option value="russia">Russia</option>
                <option value="uzbekistan">Uzbekistan</option>
                <option value="kazakhstan">Kazakhstan</option>
                <option value="philippines">Philippines</option>
                <option value="georgia">Georgia</option>
                <option value="kyrgyzstan">Kyrgyzstan</option>
                <option value="egypt">Egypt</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <CountriesSection />
      <AdmissionProcess />
      <ContactForm />
    </div>
  );
};

export default App;