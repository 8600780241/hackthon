import React from 'react'
import Header from './Header'
import style from '../Style/category.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Category(){
    const [data, setdata] = useState([]);
    async function submitdata(e) {
        e.preventDefault();
        try {
            fetch('http://localhost:/api/v1/category/getcategory')
                .then((data) => data.json())
                .then((responce) => { setdata(responce.reverse()) })
                .then(res => {
                    setdata(res.data)
                })

        } catch (e) {

        }
    }
    return(
        <>
        <div>
        <Header />
        <div  className={style.main} onSubmit={submitdata}>
            <div className={style.first}>
                <h5 className={style.text}>Category</h5>
               <Link to='/addnewcategory'><button className={style.button}>Add New </button></Link >
            </div>
            {
                data.map((i) => {
                    <div className={style.second}>
                    <div>
                        Name
                    </div>
                    <div>
                        Description
                    </div>
                    <div>
                        Status
                    </div>
                
                <div className={style.third}>
                    <div>{i.name}</div>
                    <div>{i.description}</div>
                    <div>{i.status}</div>
                </div>
                </div>
            
                })
            }
        
        </div>
        </div>
        </>
    )
}