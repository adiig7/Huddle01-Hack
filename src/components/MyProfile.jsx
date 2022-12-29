import React from "react";
import styles from "../style";
import people01 from "../assets/people01.png";
import NavBar from "./NavBar";
import Category from "./Category";

const MyProfile = () => {
  return (
    <>
      <div className="bg-primary w-full h-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="absolute z-[0] w-[40%] h-[45%] top-0 pink__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            <h1 className="text-white h-[150px] nav-heading text-6xl text-center mt-6 text-gradient font-bold">
              My Arena
            </h1>
            <div className="relative mx-auto grid grid-cols-1 mt-2 sm:mt-0 gap-[200px] lg:flex lg:justify-center">
              <div className="flex flex-col max-w-[600px] lg:max-w-[336px] ">
                <div className="items-center mb-4">
                  <div className="w-full mb-6 items-center justify-center flex flex-col ">
                    <img
                      className="w-[150px] item-center object-cover object-center min-h-[150px]"
                      src={people01}
                    ></img>
                    <button className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center ">
                      Upload Profile Pic
                    </button>
                    <label
                      className="block text-[17px] font-medium mb-4 text-white text-left"
                      htmlFor="name"
                    >
                      Enter your name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[300px] text-white bg-[#363952] sm:min-w-[230px] 
              sm:w-auto"
                    ></input>
                    <label
                      className="block text-[17px] font-medium mb-4 text-white text-left"
                      htmlFor="desc"
                    >
                      Enter your description:
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[300px] text-white bg-[#363952] sm:min-w-[230px] 
              sm:w-auto"
                    ></input>
                    <label
                      className="block text-[17px] font-medium mb-4 text-white text-left"
                      htmlFor="category"
                    >
                      Select your category:
                    </label>
                    <Category />
                    <button className="text-cyan-900 py-3 px-4 font-bold mb-8 mt-6 bg-blue-gradient rounded-[15px] outline-none ${styles} rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center ">
                      Submit
                    </button>
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

export default MyProfile;
