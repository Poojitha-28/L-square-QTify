import React from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousal.module.css';
import Card from "../Card/Card";
import 'swiper/css';

export default function Carousal({data,type})
{ 
  console.log("Inside Carosual");
  console.log(data);
    return(

        <Swiper className={styles.gridcontainer}
        slidesPerView={6}
        spaceBetween={50}
        >
       <LeftNavigation/>
         {
           data.map((element) => (
             <div key={element.id} className={styles.griditem}>
               <SwiperSlide>
               <Card cardComponent={element} type={type} />
               </SwiperSlide>
               </div>
           ))
         }
       <RightNavigation/>
       </Swiper>
    )
}