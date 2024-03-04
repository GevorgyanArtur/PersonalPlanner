import React from "react";
import s from "./Logo.module.css"
function Logo() {
    return(
        <div className={s.logo}>
            <h3><a href = "?" className={s.style}>Personal Planner</a></h3>
        </div>
    )
}

export default Logo;