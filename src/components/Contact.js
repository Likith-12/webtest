import './css/contact.scss';
import React, { useState, useEffect } from 'react';

const Contact = ({ }) => {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = e => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async e => {
    e.preventDefault();
    const { name, email, contact_no, message } = formData
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/scp/google_sheets/HwERcrTVEeAxzfrz?tabId=ipf",
        {
          method: "post",
          body: JSON.stringify([[name, email, contact_no, message]]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };
  return (
    <div className="container-contact">
      <form id="contact" onSubmit={sendData}>
        <h3>Contact</h3>
        <fieldset>
          <input placeholder="Your name" type="text" tabindex="1" name="name" required autofocus onChange={handleInput} />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" name="email" tabindex="2" required onChange={handleInput} />
        </fieldset>
        <fieldset>
          <input placeholder="Your Phone Number" type="tel" name="contact_no" tabindex="3" required onChange={handleInput} />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your Message Here...." name="message" tabindex="5" required onChange={handleInput}></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
export default Contact;