import React from "react";
import styles from "../style";
import style from "../constants/team.css";
import dhrumi_shah from "../assets/dhrumi_shah.jpeg";
import aditya_gupta from "../assets/aditya_gupta.jpg";
import twitter from "../assets/twitter.png";
import github from "../assets/github.svg";
import NavBar from "./NavBar";

const Team = () => {
  return (
    <>
      <div className="bg-primary w-full lg:h-screen sm:h-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            <h1 className="text-white  nav-heading text-7xl text-center mt-6 text-gradient font-bold">
              Team Members
            </h1>
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
              <div className="founders">
                <div className="card">
                  <h2 className="text-gradient text-3xl font-bold mb-2">
                    Dhrumi Shah
                  </h2>

                  <img
                    src={dhrumi_shah}
                    alt="Dhrumi Shah"
                    className="w-[250px] h-[300px]"
                  />
                  <p className="text-white mt-4 mb-4 text-2xl">
                    <b>Frontend Developer</b>
                  </p>

                  <div className="flex flex-row m-auto justify-center align-center">
                    <a
                      href="https://twitter.com/deetwts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={twitter} alt="Twitter Logo" />
                    </a>
                    <a
                      href="https://github.com/dhrumishah"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="Github Logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="founders">
                <div className="card">
                  <h2 className="text-gradient text-3xl font-bold mb-2">
                    Aditya Gupta
                  </h2>

                  <img
                    src={aditya_gupta}
                    alt="Dhrumi Shah"
                    className="w-[300px] h-[300px]"
                  />
                  <p className="text-white mt-4 mb-4 text-2xl">
                    <b>Full Stack Web3 Developer</b>
                  </p>

                  <div className="flex flex-row m-auto justify-center align-center">
                    <a
                      href="https://twitter.com/adiig7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={twitter} alt="Twitter Logo" />
                    </a>
                    <a
                      href="https://github.com/adiig7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={github} alt="Github Logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
