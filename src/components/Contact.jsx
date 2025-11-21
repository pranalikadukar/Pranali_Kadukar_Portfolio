import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs
      .sendForm(
        "service_zzhwda4", // Service ID from EmailJS
        "template_ee8zc1f", // Template ID from EmailJS
        form.current,
        {
          publicKey: "532b4AaypKsihOzhP",
        }
      )
      .then(
        (result) => {
          setStatus("Message Sent Successfully!");

          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Error Sending Message. Please try again.", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
          <p className="text-lg text-secondary">
            Feel free to reach out for any inquiries or collaboration
            opportunities!
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} ref={form}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-xl font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition duration-300">
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-center text-lg text-secondary">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Or reach me at
          </h3>
          <p className="text-lg">
            Email:{" "}
            <a href="mailto:kadukarpranali27@gmail.com" className="text-primary">
              kadukarpranali27@gmail.com
            </a>
          </p>
          <p className="mt-4">
            <a
              href="\Pranali_Kadukar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary underline hover:text-secondary transition duration-300">
              View My Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
