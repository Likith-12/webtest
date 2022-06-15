import "./css/contact.scss"
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({});

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
      console.log("Success:", JSON.stringify(json))
    } catch (error) {
      console.error("Error");
    }
  };
  return (
    <div>
      <div className="background">
        <div className="contact-container">
          <div className="screen">
            <div className="screen_header">
              <div className="screen_header_left">
                <div className="screen_header_button close"></div>
                <div className="screen_header_button maximize"></div>
                <div className="screen_header_button minimize"></div>
              </div>
              <div className="screen_header_right">
                <div className="screen_header_ellipsis"></div>
                <div className="screen_header_ellipsis"></div>
                <div className="screen_header_ellipsis"></div>
              </div>
            </div>
            <div className="screen_body">
              <div className="screen_body_item lt">
                <div className="app_title">
                  CONTACT US
                </div>
                {/* <div className="app_contact">PHONE: +91 7594023304<br></br>EMAIL: ipfnitc@gmail.com</div> */}
              </div>
              <div className="screen_body_item">
                <form onSubmit={sendData}>
                  <div className="app_form">
                    <div className="app_form_group">
                      <input className="app_form_control" placeholder="NAME" name="name" onChange={handleInput} />
                    </div>
                    <div className="app_form_group">
                      <input className="app_form_control" placeholder="EMAIL" name="email" onChange={handleInput} />
                    </div>
                    <div className="app_form_group">
                      <input className="app_form_control" placeholder="CONTACT NO" name="contact_no" onChange={handleInput} />
                    </div>
                    <div className="app_form_group message">
                      <input className="app_form_control" placeholder="MESSAGE" name="message" onChange={handleInput} />
                    </div>
                    <div className="app_form_group buttons">
                      {/* <button className={con.app_form_button}>CANCEL</button> */}
                      <button className="app_form_button" type="submit">SEND</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact