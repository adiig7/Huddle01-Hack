import React from "react";
import styles from "../style";
import DoctorCard from "./DoctorCard";
import people01 from "../assets/people01.png";
import NavBar from "./NavBar";

const DashBoard = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div
          className={`flex lg:flex-row md:flex-col sm: flex-col justify-end items-center gap-2.5 ${styles.boxWidth} `}
        >
          <DoctorCard
            image={people01}
            name="Herman Jensen"
            category="Therapist"
            price="$200"
            desc="Hey there! I am your therapist Hermn Jensen.We all need a little discipline. Exercise is my discipline"
            rate="4.8/5"
          />
          <DoctorCard
            image={people01}
            name="Herman Jensen"
            category="Therapist"
            price="$200"
            desc="Hey there! I am your therapist Hermn Jensen.We all need a little discipline. Exercise is my discipline"
            rate="4.8/5"
          />
          <DoctorCard
            image={people01}
            name="Herman Jensen"
            category="Therapist"
            price="$200"
            desc="Hey there! I am your therapist Hermn Jensen.We all need a little discipline. Exercise is my discipline"
            rate="4.8/5"
          />
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
