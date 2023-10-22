import React from 'react'
import Header from './Header'
import image from '../images/image289.jpg'
import style from '../Style/Home.module.css'
export default function Home() {
    return (
        <>
            <div className='main'>
                <Header />
                <div className={style.mainContainer}>
                    <div className={style.part2}>
                        <img src={image} alt="logo" className={style.img}/>
                        <div className={style.text}>Welcome to Digitalflake Admin</div>
                    </div>
                </div>
            </div>
        </>
    )
}