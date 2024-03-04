import React from "react";
import Logo from "./Logo/Logo";
import s from "./Header.module.css"
import Navs from "./Navs/Navs";
import Profile from "./Profile/Profile";
function Header() {
    return(
        <div className={s.nav}>
            <Logo />    
            <Navs /> 
            <Profile />
        </div>
    )
}
export default Header;