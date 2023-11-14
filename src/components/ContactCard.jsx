import React from "react";
import felix from "../assets/images/mr-whiskerson.png";
import phone from "../assets/images/phone-icon.png";
import mail from "../assets/images/mail-icon.png";
import "../style.css";
const ContactCard = () => {
  return (
    <div>

      <div className="contact-card">
        <img src={felix} />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phone} />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mail} />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
