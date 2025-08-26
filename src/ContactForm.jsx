
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
           "service_yh35uxx",   
        "template_w7nhgnw",
        formData,            
        "GH5oEMG8W5rMqHbK8" 
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <form onSubmit={sendEmail} className="contact-form">
        <h2>📩 Contact Us</h2>
        <p className="form-subtitle">We’d love to hear from you. Please fill out the form below.</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message *"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
