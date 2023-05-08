import React from 'react'
import styles from './Footer.module.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTerminalBoxFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social__icons}>
        <div className={styles.icon}>
          <AiFillGithub />

        </div>
        <div className={styles.icon}>
          <AiFillLinkedin />

        </div>
        <div className={styles.icon}>
          <AiFillInstagram />

        </div>
        <div className={styles.icon}>
          <AiFillFacebook />

        </div>
        <div className={styles.icon}>
          <AiFillTwitterCircle />

        </div>
        <div className={styles.icon}>

          <RiTerminalBoxFill />
        </div>
      </div>
      <div className={styles.footer__text}>
      <p>Designed & Built by</p>
      <p>Aytac Rzayeva</p>

      </div>

    </div>
  )
}

export default Footer