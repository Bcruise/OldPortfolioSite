import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sm9sfhi",
        "template_o1do94o",
        formRef.current,
        "-29jWKGdLoYcM0kno"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <div className="c-second-div">
                <FontAwesomeIcon icon={faPhone} class="faPhone" />
                07972 045 233
              </div>
            </div>
            <div className="c-info-item">
              <div className="c-second-div">
              <FontAwesomeIcon icon={faEnvelope} class="faEnvelope" />
                ben_cruise@hotmail.co.uk
              </div>
            </div>
            <div className="c-info-item">
              <div className="c-second-div">
              <FontAwesomeIcon icon={faLocationDot} class="faLocationDot" />
                Ash, United Kingdom
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Currently seeking new employment for the right company.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" className="contactInputs"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" className="contactInputs"/>
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" className="contactMessage"/>
            <button className="contactButton">Submit</button>
            <p style={{marginBottom: '30px'}}></p>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;