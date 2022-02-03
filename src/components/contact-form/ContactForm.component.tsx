import { useState } from "react";

import { handleSubmit } from "./contactForm.utils";

import "./contactForm.style.scss";
import TextInput from "../inputs/text-input/TextInput.component";
import TextArea from "../inputs/text-area/TextArea.component";
import CtaBtn from "../btn/cta-btn/CtaBtn.component";
import StatusMsg from "../status-msg/StatusMsg.component";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [statusMessage, setStatusMessage] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <section className="contact-form">
      <span className="contact-form__line"></span>
      <div className="container">
        <form
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          onSubmit={(e) =>
            handleSubmit(
              e,
              name,
              setName,
              email,
              setEmail,
              message,
              setMessage,
              setStatusMessage,
              setStatus
            )
          }
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <h1 className="fs-title">{"Entre em Contato =>"}</h1>
          <TextInput
            label="Seu Nome"
            value={name}
            setValue={setName}
          ></TextInput>
          <TextInput
            label="Seu Email"
            value={email}
            setValue={setEmail}
          ></TextInput>
          <TextArea
            label="Sua Mensagem"
            value={message}
            setValue={setMessage}
          ></TextArea>
          <StatusMsg msg={statusMessage} success={status}></StatusMsg>
          <CtaBtn text="Confirmar" type="submit"></CtaBtn>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
