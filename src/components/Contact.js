// import React, { useRef, useState } from "react";
import Logo from "../img/logoQuad.png";
import "./contact.css";

// import emailjs from "@emailjs/browser";

const Contact = () => {
  // const formRef = useRef();
  // const [done, setDone] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Get the form data from the ref
  //   const formData = new FormData(formRef.current);

  //   // Check if any required fields are empty
  //   let isFormValid = true;
  //   for (const [name, value] of formData.entries()) {
  //     if (!value && formRef.current.elements[name].hasAttribute("required")) {
  //       isFormValid = false;
  //       break;
  //     }
  //   }

  //   if (!isFormValid) {
  //     window.alert("Please complete the form.");
  //     return;
  //   }

  //   emailjs
  //     .sendForm(
  //       "service_1ooou8g",
  //       "template_0ianvtg",
  //       formRef.current,
  //       "Rih8Wv0aVWJCpPMGO"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         window.alert("Thank you! Message sent.");
  //         window.location.reload();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">I nostri contatti</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Logo} alt="" className="c-icon" />
              +39 348 2664035
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Logo} alt="" />
              info@athesis-herbs.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Logo} alt="" />
              Via San Marco, 80 Verona Italy
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              Importiamo materie prime per produzione di integratori da oltre 25
              anni. <br></br>Contattaci per qualsiasi informazione.
            </b>
          </p>
          <form>
            {/* ref={formRef} onSubmit={handleSubmit} */}
            <input type="text" placeholder="Nome" name="user_name" required />
            <input
              type="text"
              placeholder="Tema"
              name="user_subject"
              required
            />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea
              rows="5"
              placeholder="Messaggio"
              name="message"
              required
            />
            <button>Submit</button>
            {/* {done} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
