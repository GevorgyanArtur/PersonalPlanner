import React,{useState} from "react"
import s from "./Section1.module.css"
function Slide() {
    let arr = ["https://redstore.am/uploads/New%20Banners/Frame%2056_1.jpg", "https://redstore.am/uploads/New%20Banners/vision.jpg","https://redstore.am/uploads/New%20Banners/Frame%2054.jpg"]
    let [x,setX] = useState(0);
    return <div> 
    <div className={s.a}>
        <img src={arr[x]} alt="" className={s.n}/>
        <button className={s.f} onClick={()=> setX(arr.length - 1 === x ? 0 : x + 1)}>Button</button>
    </div>
    </div>
}

export default Slide;