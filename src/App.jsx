import React from "react";
import MainPage from "./components/MainPage";
import styles from "./style";

export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <MainPage />
        </div>
      </div>
    </div>
  );
}
