import React from "react";
import style from '../Style/Forget.module.css'

export default function ForgetPassword(){
    return(
        <>
       <div>
        <div>
            <h5 className={style.h5}>
            Did you forget your password?
            </h5>
        </div>
        <div className={style.line}>
        Enter your email address and we'll send you a link to restore password
        </div>
        <div>
            <input type="email" placeholder="email address" className={style.input}/>
        </div>
        <div>
            <button className={style.reset}>Request Reset Link</button>
            <div className={style.login}>Back to Login</div>
        </div>
       </div>
        </>
    )
}