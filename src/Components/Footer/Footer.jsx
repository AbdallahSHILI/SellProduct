import Image from "next/image";
import styles from "./Footer.module.css";
import { social_media } from "./data";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Hexashop. All rights reserved.</div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/img/icons/${media.name}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt="Hexashop Icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
