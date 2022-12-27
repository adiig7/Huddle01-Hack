import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import styles from "../style";
// import ABI from './../utils/'

const InitPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
      <div className={`bg-primary h-screen ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-white h-[150px] nav-heading text-7xl text-center mt-6 text-gradient font-bold">
            User Registration
          </h1>

          <div className="w-[100%] flex flex-col items-center justify-center m-auto mt-20">
            <ConnectButton />
          </div>
          <div className="w-[100%] flex flex-col items-center justify-center m-auto mt-16 gap-4">
            <input
              id="name"
              type="text"
              // value={product.title}
              // onChange={(e) => setProduct({ ...product, title: e.target.value })}
              placeholder="Enter Your Name"
              className="outline-none px-4 py-2 font-medium rounded-[10px] w-150px text-white feedback-card"
              required
            ></input>
            <button
              type="submit"
              className="w-full ml-auto
               mr-auto px-12 py-2 rounded-[10px] bg-blue-gradient 
              text-[20px] font-semibold sm:min-w-[230px] 
               sm:w-auto text-white
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
