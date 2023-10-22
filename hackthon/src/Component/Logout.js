import React from "react";
import image from '../images/image290.jpg'
import style from '../Style/Logout.module.css'
import { useNavigate } from "react-router-dom";
export default function Logout(){
    const navigate = useNavigate()
    const logout = ()=> {
       localStorage.clear();
              navigate('/')
    }
    const cancle = () => {
        navigate('/home')
    }
    return(
        <>
        <div>
            <div>
                <img src={image} alt="warning image" className={style.image}/>
                <h4 className={style.text}>Log Out</h4>
            </div>
            <div className={style.state}>
            Are you sure you want to log out ?
            </div>
            <div>
                <button className={style.cancle} onClick={cancle}>Cancle</button>
                <button className={style.confirm} onClick={logout}>Confirm</button>
            </div>
        </div>
        </>
    )
}