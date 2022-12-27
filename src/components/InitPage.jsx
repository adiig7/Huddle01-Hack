import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import styles from "../style";
// import ABI from './../utils/'

const InitPage = () => {
  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <h1 className="text-white h-[150px] nav-heading text-7xl text-center mt-6 text-gradient font-bold">
            User Registration
          </h1>

          <div className="w-[100%] flex flex-col items-center justify-center m-auto mt-20">
            <ConnectButton />
          </div>
          <div className="relative mt-8 flex flex-col">
            <input
              id="name"
              type="text"
              // value={product.title}
              // onChange={(e) => setProduct({ ...product, title: e.target.value })}
              placeholder="Enter Your Name"
              className="m-auto outline-none mb-6 px-4 py-2 font-medium rounded-[10px] max-w-[280px] text-white feedback-card sm:min-w-[230px] 
              sm:w-auto"
            ></input>
            <button
              type="submit"
              className="w-full ml-auto
               mr-auto px-12 py-2 rounded-[10px] bg-blue-gradient 
              text-[20px] font-semibold sm:min-w-[230px] 
               sm:w-auto text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer select-none text-center
               "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitPage;
