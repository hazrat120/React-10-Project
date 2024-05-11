import Button from "./Button";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import styles from "../css/contactForm.module.css";
import images from "/public/images/Service 24_7-pana 1.svg";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Mr.Ali");
  const [email, setEmail] = useState("hazrat.ali15h@gmail.com");
  const [text, setText] = useState("Hello World");

  const formSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className={styles.con_form}>
      <div className={styles.con_btn_inp}>
        <div className={styles.double_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={
              <MdOutlineMessage
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
            }
          />
          <Button
            text="VIA CALL"
            icon={<MdCall style={{ fontSize: "18px", marginRight: "5px" }} />}
          />
        </div>

        <Button
          isactive={true}
          text="VIA EMAIL FORM"
          icon={
            <MdOutlineEmail style={{ fontSize: "18px", marginRight: "5px" }} />
          }
        />

        <form onSubmit={formSubmit} style={{ marginTop: "33px" }}>
          <div className={styles.form_contact}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_contact}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_contact}>
            <label htmlFor="text">Text</label>
            <textarea style={{ width: "440px" }} type="text" rows="8" />
          </div>

          <Button
            text="SUBMIT"
            icon={
              <MdOutlineEmail
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
            }
          />
        </form>
        <div>{name + " " + email + " " + text}</div>
      </div>

      <div className="form_svg">
        <img src={images} alt="form svg" />
      </div>
    </div>
  );
};

export default ContactForm;
