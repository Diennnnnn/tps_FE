import React from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleZaloLogin = () => {
    router.push("/zalo-login");
  };

  const handleLoginOTP = () => {
    router.push("/signInOTP");
  };
  // const handleLogin = () => {
  //   router.push("/login");
  // }
  return (
    <div className={styles.homeheadercontainer}>
      <div className={styles.homeheadercontent}>
        <div className={styles.leftcontent}>
          <div className={styles.headerlogo}></div>
        </div>

        <div className={styles.rightcontent}>
          <div className={styles.zalo}>
            <div className={styles.zaloimg} onClick={handleZaloLogin}></div>
            <div className={styles.zalolable} onClick={handleZaloLogin}>
              Quan tâm
            </div>
          </div>
          <div className={styles.login} onClick={handleLoginOTP}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
