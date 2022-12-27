import React from "react";
import styles from "../style";
import people01 from "../assets/people01.png";
import NavBar from "./NavBar";

const MyProfile = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>
      </div>
      <div className="bg-primary w-full h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            <h1 className="text-white h-[150px] nav-heading text-6xl text-center mt-6 text-gradient font-bold">
              My Arena
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
