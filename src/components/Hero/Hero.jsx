import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I m Himanshu</h1>
            <p className={styles.description}>I am a frontend developer with of experience in ReactJS and NodeJS. Reach out if you'd like to learn more!</p>
            <a href="mailto:himanshudhawale9@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.jpg")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
