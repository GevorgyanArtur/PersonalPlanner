import React from "react";
import s from "./Navs.module.css"
import TimePlanner from "./Nav1/Nav";
import GoalTracking from "./Nav2/Nav2";
import PersonalizedSpace from "./Nav3/Nav3";
function Navs() {
    return(
        <div className={s.time}>
            <TimePlanner />
            <GoalTracking />
            <PersonalizedSpace />
        </div>
    );
}

export default Navs;