import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles/homepageAboutUsBlock.module.css";
import aboutUSImg from "./images/beautiful-blonde-woman-black-hat-white-elegant-evening-dress-posing-isolated-background-fashion-look-stylish-71634316.webp";
import aboutUsIconFirst from "./images/green-dress-svgrepo-com.svg";
import aboutUsIconSecond from "./images/aboutus-icon2.svg";
import aboutUsBtnIcon from "./images/aboutus-btn-arrow.svg";

const HomePageAboutUsBlock = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homepage__aboutus__block}>
      <div className={styles.container}>
        <div className={styles.img__wrapper}>
          <div>
            <img
              src={aboutUSImg}
              alt="error"
              className={styles.aboutus__left__block}
            />
          </div>
        </div>
        <div className={styles.aboutus__right__block}>
          <h2 className={styles.aboutus__right__block__header}>About Us</h2>
          <h2 className={styles.aboutus__right__block__subheader}>
            We Believe in Fashion for Every Woman
          </h2>
          <p className={styles.aboutus__right__block__descr}>
            We create clothing that highlights the individuality and style of
            every woman. High-quality materials and attention to detail are our
            guarantee.
          </p>
          <div className={styles.aboutus__right__block__items}>
            <div className={styles.aboutus__right__block__item}>
              <div className={styles.aboutus__right__block__item__img}>
                <img
                  src={aboutUsIconFirst}
                  style={{ width: "55px" }}
                  alt="error"
                />
              </div>
              <div className={styles.aboutus__right__block__item__title}>
                <h2 className={styles.aboutus__right__block__item__header}>
                  Trendy Collections
                </h2>
                <p className={styles.aboutus__right__block__item__descr}>
                  We select only the most current and fashionable clothing
                  collections to ensure you always stay on trend and feel
                  confident.
                </p>
              </div>
            </div>
            <div className={styles.aboutus__right__block__item}>
              <div className={styles.aboutus__right__block__item__img}>
                <img src={aboutUsIconSecond} alt="error" />
              </div>
              <div className={styles.aboutus__right__block__item__title}>
                <h2 className={styles.aboutus__right__block__item__header}>
                  Quality Guarantee
                </h2>
                <p className={styles.aboutus__right__block__item__descr}>
                  We monitor the quality of fabrics and tailoring to ensure that
                  our clothing is not only beautiful but also comfortable for
                  everyday wear.
                </p>
              </div>
            </div>
          </div>
          <button
            className={styles.aboutus__right__block__button}
            onClick={() => navigate("/products")}
          >
            <h2 className={styles.aboutus__right__block__button__title}>
              Shop Now
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutUsBlock;
