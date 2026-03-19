import React from "react";
import style from "./styles/banner.module.css";
import natural from "./images/Sustainable_Fashion_Made_Easy-100_Natural_Cotton_Grown_with_Care.jpg";
import otter from "./images/Sustainable_Cotton_Clothes.webp";

const BannerComp = () => {
  return (
    <div className={style.banner}>
      <div className={style.container}>
        <div className={style.card}>
          <p className={style.natural}>Natural!!</p>
          <h2 className={style.h2}>
            Get fron uganda <br />
            with black hands
          </h2>
          <img className={style.banner_img} src={natural} alt="" />
        </div>
        <div className={style.card}>
          <p className={style.natural} style={{ color: "#7EB693" }}>
            Otter!!
          </p>
          <h2 className={style.h2} style={{ color: "wheat" }}>
            Get 10% off <br />
            on full price
          </h2>
          <img className={style.banner_img} src={otter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
