import React from 'react'
import logo from '../images/Group.jpg';
import logout from '../images/Vector.jpg';
import style from '../Style/Header.module.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
            <div className={style.mainheader}>
                <div className={style.box1}>
                    <div>
                        <img src={logo} alt='logo' className={style.image1} />
                        <p className={style.text}>digitalflake</p>
                    </div>
                    <div>
                        <Link to='logout'><img src={logout} alt='logoutbutton' className={style.image2} /></Link>
                    </div>
                </div>
                <div className={style.part1}>
                <Link to='/home'>   <div className={style.nav}>Home</div></Link> 
                   <Link to='/category'><div className={style.nav}>Category</div></Link> 
                   <Link to='/products'> <div className={style.nav}>Products</div></Link>
                </div>

            </div>
        </>
    )
}