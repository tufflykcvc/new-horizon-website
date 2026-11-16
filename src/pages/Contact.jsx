import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFeedback("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFeedback("Thank you! Your message has been received.");

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="page-container">
      <section className="page-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>
          Have a question or a project in mind?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Let's Talk</h2>
          <p>
            Email: <a href="mailto:chrisvics1212@email.com">chrisvics1212@email.com</a>
        </p>
          <p>Phone: +234 9049115786</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {feedback && <p>{feedback}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;