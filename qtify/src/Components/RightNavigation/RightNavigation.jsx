import { useSwiper } from "swiper/react";
import {ReactComponent as RightImage} from "../../assets/RightNavigation.svg";
import styles from "./RightNavigation.module.css";
import { useEffect } from "react";
import { useState } from "react";


 export default function RightNavigation()
 {
  const swiper=useSwiper();
  const[isEnd,SetisEnd]=useState(swiper.isEnd);
  useEffect(()=>{
    swiper.on("slideChange",()=>{
      SetisEnd(swiper.isEnd);
    })
  },[])
      return(
        <div className={styles.LeftImagePosistioning}>
          {!isEnd && <RightImage  onClick={()=>swiper.slideNext()}/>}
        </div>
      )
 }