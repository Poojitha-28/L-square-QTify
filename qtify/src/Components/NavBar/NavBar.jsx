import { Link } from "react-router-dom";
import React from "react";
import Search from "../Search/Search";
import Button
 from "../Button/Button";
 import styles from "./NavBar.module.css";
 import Logo from "../Logo/Logo";

export default function NavBar() {

  return (
    <nav >
      <div className={styles.navbar}>
       <Link to="/">
        <Logo></Logo>
       </Link> 
       <Search placeholder="Search a album of your choice"/>
       <Button>Give Feedback</Button>
       </div>

    </nav>
  );
}
