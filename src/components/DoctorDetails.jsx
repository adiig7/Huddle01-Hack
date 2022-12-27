import React from "react";
import styles from "../style";
import people01 from "../assets/people01.png";
import NavBar from "./NavBar";

const DoctorDetails = () => {
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
              Doctor Detail
            </h1>

            <div className="relative mx-auto grid grid-cols-1 mt-14 sm:mt-0 gap-[200px] lg:flex lg:justify-center">
              <div className="flex flex-col max-w-[600px] lg:max-w-[336px] ">
                <div className="items-center mb-4">
                  <div className="w-full mb-6 items-center justify-center flex ">
                    <img
                      className="w-[150px] item-center object-cover object-center min-h-[150px]"
                      src={people01}
                    ></img>
                  </div>
                </div>
                <p className="mb-4 font-semibold text-white">Category</p>
                <div className="flex space-x-2">
                  <a className="bg-blue-gradient font-ssp cursor-pointer rounded-[24px] py-1 px-4 text-[13px] font-semibold text-cyan-900">
                    Therapist
                  </a>
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[443px]">
                <div className="bg-[#FFFFFF] rounded-[20px] p-6 w-full mb-4 dark:bg-[#33354B]">
                  <div className="grid grid-cols-12">
                    <p className="mb-2 text-[18px] col-span-11 font-bold text-gradient dark:text-white md:text-[25px]">
                      Herman Jensen
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-[20px] text-white font-bold mb-4">
                      $200
                    </p>
                  </div>
                  <p className="mb-2 font-semibold text-white">Description</p>
                  <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                    Hey there! I am your therapist Hermn Jensen.We all need a
                    little discipline. Exercise is my discipline
                  </p>
                  <p className="mb-2 font-semibold text-white"> Availability</p>
                  <p className="mb-8 max-w-[450px] text-[#ADB0C9]">
                    10AM to 5PM IST
                  </p>
                  <p className="mb-2 font-semibold text-white">Rating</p>
                  <p className="mb-8 max-w-[450px] text-[#ADB0C9]">4.8/5</p>
                </div>
                <button className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center ">
                  Start meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
