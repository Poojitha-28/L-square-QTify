import { useEffect, useState } from "react";
import  {ReactComponent as LeftImage} from "../../assets/LeftNavigation.svg";
import styles from "./LeftNavigation.module.css";
import { useSwiper } from "swiper/react";

export default function LeftNavigation()
 {
    const swiper=useSwiper();
    const[isBegining,SetisBegining]=useState(swiper.isBeginning);
    useEffect(()=>{
      swiper.on("slideChange",()=>{
        SetisBegining(swiper.isBeginning);
      })
    },[]);

      return(
        <div className={styles.LeftImagePosistioning}>
         {!isBegining && <LeftImage  onClick={()=>swiper.slidePrev()}/>}
        </div>
      )
 }