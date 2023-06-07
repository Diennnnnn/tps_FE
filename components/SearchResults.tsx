import React from "react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import BookingModal from "./modal/BookingModal";

const SearchResults = () => {
  const [isOpen, setState] = useState(false);

  function handleClick() {
    setState(!isOpen);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          PHÒNG KHÁM CHUYÊN KHOA NHI - TMH PEDICMA
        </div>
        <div className={styles.body}>
          <div className={styles.name_doctor}>BSCK2. TRẦN LÊ THỊ BÍCH HẰNG</div>
          <div className={styles.name_clinic}>BVĐK. Phụ sản Phương Châu</div>
          <div className={styles.phone}>0907.666.777</div>
          <div className={styles.address}>
            125/16/151, Xô Viết Nghệ Tĩnh, P. An Nghiệp | Chỉ đường
          </div>
          <div className={styles.row}>
            <div className={styles.reaction}>
              {/* <i className="fas fa-circle-heart">145.965</i> */}
              <i className="fas fa-search" />
              145.965
            </div>
            <button className={styles.btn_confirm}>Đặt lịch khám</button>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isOpen} />
    </>
  );
};

export default SearchResults;
