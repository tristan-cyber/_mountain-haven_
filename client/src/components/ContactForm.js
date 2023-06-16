import styles from "../styles/ContactForm.module.css";
import React, { useState } from "react";

const axios = require("axios");

async function saveContact(contact) {
  const response = fetch("/contact", {
    method: "GET",
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    const contact = { Name: name, email: email, message: message };
    console.log(contact);

    const response = await fetch("/contact", {
      method: "GET",
    });

    const text = await response.text();
    console.log("server Respones " + text);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // const response = await fetch("/api/contacts", {
    //   method: "POST",
    //   body: JSON.stringify(contact),
    // });
    // const data = await response.json();
    // console.log("Response: " + Object.values(data));
  };

  return (
    <div
      className={`container d-flex align-items-center justify-content-center ${styles.outerContainer}`}
    >
      <div className={`col-md-6 bg ${styles.innerContainer}`}>
        <h1 className="text-center">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={` ${styles.customButton}`}>
            <span>Sumbit</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
