import React, { useRef, useState } from "react";
import "./contact.css";
import mahi from "../components/Images/Togeth.jpeg";
import mahisnow from "../components/Images/maheshsnow.jpg";
import mahipic from "../components/Images/Subject.png";
import mahiok from "../components/Images/mahifinal.jpeg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [k, setK] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je9icz9",
        "template_va6mqyj",
        form.current,
        "Pbi8rzP2aUkcK5zxz"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <div
          className="contactPageTitle"
          style={{
            backgroundImage: `url(${mahiok})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Happy Birthday
          <br /> Mahes with No H
          <br />
          Shared everything with you. Don't wanna get emotional as we are best
          friends
          <br /> To be frank, you're the one who inspires me to do things, but I
          know that you are the biggest fan of me
        </div>
      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <button className="start">Start</button>
      </form>
    </div>
  );
};

export default Contact;
