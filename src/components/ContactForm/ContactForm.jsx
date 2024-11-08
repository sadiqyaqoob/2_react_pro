import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const onViaCallSubmit = () => {
    console.log("I am from call");
  };

  const onViaChatSubmit = () => {
    console.log("I am from chat");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("name", event.target[0].value);
    // console.log("email", event.target[1].value);
    // console.log("text", event.target[2].value);
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaChatSubmit}
            icons={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button
            onClick={onViaCallSubmit}
            icons={<FaPhoneAlt fontSize="24px" />}
            text="VIA CALL"
          />
        </div>
        <Button
          isOutline={true}
          icons={<MdMailOutline fontSize="24px" />}
          text="VIA MAIL FORM"
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="4" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" type="submit" />
          </div>

          <div>{name + " " + email + " " + text + " "}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
