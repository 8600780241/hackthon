import React from "react";
import style from '../Style/Login.module.css'
import image from '../images/image289.jpg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    function setFormValues(e) {
        setFormData(
            ...formdata,
            [e.target.name] = e.target.value
        )
    }
    async function submitForm(e){
        e.preventDefault();
        fetch('http://localhost:/8000/api/v1/user/userregister',
        {
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formdata)
        }

        )
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data);
          navigate('/');
        })
        .catch((error)=> {
          throw new error
        })
  }
    return (
        <>
            <div className={style.main}>
                <div className={style.box1} onSubmit={submitForm} encType="multipart/form-data">
                    <img src={image} alt='logo' className={style.image} value={formdata.email} onChange={setFormValues}/><br></br><br></br><br></br><br></br>
                    <input type='email' placeholder='email' className={style.email} value={formdata.password} onChange={setFormValues}/><br></br><br></br>
                    <input type='password' placeholder='password' className={style.password} /><br></br><br></br>
            <br></br><br></br>
                    <button className={style.button}>Register</button>
                </div>
            </div>
        </>
    )
}