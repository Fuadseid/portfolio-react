import React, { useRef, useState } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = ({ isLight }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_mr9dq6f", "template_2dvxh3g", form.current, {
        publicKey: "ysXRi72Fc06I3O94R",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSuccess(false);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleReset = () => {
    form.current.reset();
    setIsSuccess(false);
  };

  return (
    <div className={isLight ? styles.mainlight : styles.maindark}>
      <section className={styles.sec}>
        <div  className={isLight ? styles.container : styles.darkcontainer}>
          <motion.form
    initial={{y:"100%"}}
    animate={{y:0}}
    exit={{y:"-100%"}}
    transition={{duration:0.7,delay:0}}
    className={isLight ? styles.formco : styles.formcodark} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input
              type="submit"
              value={isSuccess ? "Success" : "Send"}
              disabled={isSubmitting || isSuccess}
            />
                 {isSuccess && (
            <button className={styles.button} onClick={handleReset}>Send Another Message</button>
          )}
         <div   className={
                  isLight ? styles.socialmedia : styles.socialmediadark
                }>
                      <a href="https://github.com/Fuadseid">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/fuad-seid-8b61322a9">
                  <CiLinkedin />
                </a>
                <a href="https://upwork.com/freelancers/~01da3f6dc0c1cdd8d4">
                  <FaSquareUpwork />
                </a>
                <a href="https://instagram.com/fuadseidm07/">
                  <FaInstagram />
                </a>
          </div>

          </motion.form>
 

        </div>
      </section>
    </div>
  );
};

export default Contact;
