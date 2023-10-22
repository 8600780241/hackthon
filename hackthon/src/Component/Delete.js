import React from "react";
import image from '../images/image290.jpg'
import style from '../Style/Logout.module.css'
export default function Delete(){
    return(
        <>
           <div>
            <div>
                <img src={image} alt="warning image" className={style.image}/>
                <h4 className={style.text}>Delete</h4>
            </div>
            <div className={style.state}>
            Are you sure you want to delete ?
            </div>
            <div>
                <button className={style.cancle}>Cancle</button>
                <button className={style.confirm}>Confirm</button>
            </div>
        </div>
        </>
    )
}