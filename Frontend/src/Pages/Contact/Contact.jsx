import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4qrd6rk",
        "template_2r480fp",
        formData,
        "BQ2VzFLCCB-cyp4N_"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Try again!");
      });
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-container">
        <div className="contact-text">
            <h1>Contact.</h1>
            <p>Let's build something amazing together</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex-icone">
            <button className="contact-button" type="submit"><p>Send Message</p></button>
            <div className="icone">
            <a href="https://www.linkedin.com/in/rijans-patoliya/"><FaLinkedin /></a>
            <a href="https://github.com/RijansPatoliya"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
