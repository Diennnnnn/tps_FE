import React from "react";
import styles from "@/styles/Home.module.css";

const Search = () => {
  return (
    <div className={styles.homeheaderbanner}>
      <div className={styles.contentup}>
        <div className={styles.title1}></div>
      </div>
      <div className={styles.contentdown}>
        <div className={styles.search}>
          <input type="text" placeholder="Tìm Bác sĩ/Phòng khám/Chuyên khoa" />
          <button type="submit" className={styles.btnsearch}>
            Tìm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
