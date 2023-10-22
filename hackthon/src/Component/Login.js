import React from 'react'
import style from '../Style/Login.module.css'
import image from '../images/image289.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  
    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    function setFormValues(e) {
        setFormData(
            ...formdata,
            [e.target.name] = e.target.value
        )
    }
    function submitForm(e) {
        e.preventDefault();
        console.log(formdata);
        fetch('http://localhost:/8000/api/v1/user/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata)
        }

        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('token', data.data)
                navigate("/home")
            })
            .catch((error) => {
                throw new error
            })

    }
    return(
        <>
       <div className={style.main}>
             <div className={style.box1} onSubmit={submitForm}>
                <img src={image} alt='logo' className={style.image}/>
                <p className={style.text}>Welcome to Digitalflake Admin</p><br></br><br></br>
                <input type='email' placeholder='email' className={style.email} value={formdata.email} onChange={setFormValues}/><br></br><br></br>
                <input type='password' placeholder='password' className={style.password} value={formdata.password} onChange={setFormValues}/><br></br><br></br>
               <Link to='/forgetpassword'><p className={style.forget}>Forget password</p><br></br><br></br></Link> 
                <button className={style.button}>Login</button>
             </div>
        <Link to='/register'>   <button className={style.register}>Register</button></Link>  
       </div>
        </>
    )
}