import React from "react";
import logo from "../../assets/Music.svg"
import styles from "./Logo.module.css"

export default function Logo()
{
    return(
        <div className={styles.image}>
        <img src={logo} alt ="Qtify Logo"  />
        </div>
    )
}