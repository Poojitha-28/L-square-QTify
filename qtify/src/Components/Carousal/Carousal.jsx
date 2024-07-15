import React from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousal.module.css';
import Card from "../Card/Card";
import 'swiper/css';

export default function Carousal({data,type})
{ 
   
    return(

        <Swiper
        slidesPerView={6}
        spaceBetween={50}
        >
       <LeftNavigation/>
       <div className={styles.gridcontainer}>
         {
           data.map((element,index) => (
           
             <div key={index} className={styles.griditem}>
               <SwiperSlide>
               <Card cardComponent={element} type={type} />
               </SwiperSlide>
               </div>
           ))
         }
       </div>
       <RightNavigation/>
       </Swiper>
    )
}