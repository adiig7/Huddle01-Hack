import React from "react";

import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";

import styles from "./style";

export default function App() {
  return (
    <div className="bg-[#10213B] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary h-screen ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DashBoard />
        </div>
      </div>
    </div>
  );
}
