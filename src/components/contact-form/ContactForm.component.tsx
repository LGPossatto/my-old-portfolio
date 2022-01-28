import { useState } from "react";

import "./contactForm.style.scss";
import TextInput from "../inputs/text-input/TextInput.component";
import TextArea from "../inputs/text-area/TextArea.component";
import CtaBtn from "../btn/cta-btn/CtaBtn.component";
import ErrorMsg from "../error-msg/ErrorMsg.component";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ok");
  };

  return (
    <section className="contact-form">
      <span className="contact-form__line"></span>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="fs-title">{"Entre em Contato =>"}</h1>
        <TextInput label="Seu Nome" value={name} setValue={setName}></TextInput>
        <TextInput
          type="email"
          label="Seu Email"
          value={email}
          setValue={setEmail}
        ></TextInput>
        <TextArea
          label="Sua Mensagem"
          value={message}
          setValue={setMessage}
        ></TextArea>
        <ErrorMsg msg={"test"}></ErrorMsg>
        <CtaBtn text="Confirmar" type="submit"></CtaBtn>
      </form>
    </section>
  );
};

export default ContactForm;
