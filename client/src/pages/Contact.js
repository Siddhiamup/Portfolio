import { useState } from "react";

function Contact() {

  // Store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Message sent!");

  }

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <p className="text-center">
          I am open to internship and full-time opportunities in software development.
          Feel free to reach out for collaboration or opportunities.
        </p>
        <button className="btn btn-dark">
          Send Message
        </button>

      </form>

    </div>

  )

}

export default Contact