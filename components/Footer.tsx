import React from "react";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_dad}>
      <div className={styles.footer}>
        <div className={styles.image}></div>
        <div className={styles.p}>
          Copyright © 2023 by{" "}
          <a href="https://tpsoftct.vn" target="_blank">
            TPSoft
          </a>
        </div>
        <div className={styles.p}>
          Hotline/Zalo: 0919 118 187 (Mr. Nhựt Tân)
        </div>
      </div>
    </div>
  );
};

export default Footer;
