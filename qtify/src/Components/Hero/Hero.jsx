 import image from "../../assets/vibrating-headphone.svg";
 import styles from "./Hero.module.css";

 export default function Hero()
 {
    return(
        <div className={styles.hero}>
            <div className={styles.h1}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
          <img src={image} alt ="vibrating - headphone" />
            </div>
        </div>
    )
 }