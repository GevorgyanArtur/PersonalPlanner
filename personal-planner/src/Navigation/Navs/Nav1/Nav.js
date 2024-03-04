import React from "react";
import s from "./Nav.module.css"
function TimePlanner() {
    return(<div>
        <div className={s.time}>
            <a href = "?" className={s.style}>Time Planner</a>
        </div>
        </div>
    );
}

export default TimePlanner;