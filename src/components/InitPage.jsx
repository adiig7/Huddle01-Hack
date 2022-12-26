import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react'
import styles from "../style";

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

            <div className='w-[100%] items-center mt-20'>
                <ConnectButton />     
                    </div>
                    <div className='w-[100%] items-center mt-20'>
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
                            className="w-full ml-auto mr-auto px-12 py-2 rounded-[10px] bg-gradient-to-r from-blue-500 to-white-500 text-white text-[18px] font-semibold hover:opacity-90 disabled:bg-[#595B73] disabled:pointer-events-none sm:min-w-[230px] sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300"
                        >
                           Put up for sale!
                        </button>
                    </div>

        </div>
      </div>
    </div>
    )
}

export default InitPage