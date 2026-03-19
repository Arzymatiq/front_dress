import React from "react";
import photo from "./images/ecofriendly-photo.svg";
import style from "./styles/ecofriendly.module.css";

const EcoFriendly = () => {
  return (
    <div className={style.ecofriendly__block}>
      <div className={style.img__block}>
        <img src={photo} alt="" />
      </div>

      <div className={style.info__block}>
        <h5 className={style.info__name}>Eco Friendly</h5>
        <h3 className={style.info__title}>Econis is a Trendy Clothing Store</h3>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>Start with Our Company First</h4>
          <p className={style.info__subtitle_text}>
            Start with our collections. We offer stylish clothing for every
            season, so every woman can create her own unique look.
          </p>
        </div>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>Learn How to Dress Yourself</h4>
          <p className={style.info__subtitle_text}>
            We share tips on combining items and choosing looks so you always
            look elegant and confident.
          </p>
        </div>

        <div className={style.info__subtitles_item}>
          <h4 className={style.info__subtitle}>Clothing for Every Occasion</h4>
          <p className={style.info__subtitle_text}>
            We create collections that take into account the latest fashion
            trends and practicality, so that clothing is both comfortable and
            stylish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendly;
