import "./scrolltop.css"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Scrolltop(){
    const [scrollButton,setScrollbutton]=useState(false);
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)


    },[location.pathname])
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>300){
                setScrollbutton(true)
            }
            else{
                setScrollbutton(false)
            }

        })
    },[])

    return(
        <div className="scrolltop">
           {scrollButton && <button onClick={()=>{
                window.scrollTo({top:0,behavior:'smooth'})
    
                        }}><i className="fa-solid fa-arrow-up"></i></button>}
        </div>
    )
}