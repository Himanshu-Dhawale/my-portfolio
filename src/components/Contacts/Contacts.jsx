import React from 'react'
import styles from "./Contacts.module.css";
import {getImageUrl} from "../../utils";
export const Contacts = () => {
  return (
    <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                    <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:himanshudhawale9@gmail.com">himanshudhawale9@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/himanshu-dhawale/">linkedin.com/himanshu-dhawale</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/Himanshu-Dhawale">github.com/Himanshu-Dhawale</a>
                </li>
            </ul>
    </footer>
  )
}
