import React from "react";
import { useState } from "react";
import Header from './Header'
import style from '../Style/category.module.css'
import { Link } from "react-router-dom";
export default function Products() {
    const [data, setdata] = useState([]);
   // const [file,setFile] =useState();
    // const upload = () => {
    //     const formData= new FormData();
    //     formData.append('file',file)
    //     fetch('http://localhost:8000/upload',
    //     formData
    //     .then(res => {
    //         res.data
    //     })
    //     )
    // }
    async function submitdata(e) {
        e.preventDefault();
        try {
            fetch('http://localhost:8000/api/v1/product/getproducts')
                .then((data) => data.json())
                .then((responce) => { setdata(responce.reverse()) })
                .then(res => {
                    setdata(res.data)
                })

        } catch (e) {

        }
    }
    return (
        <>
            <div>
                <Header />
                <div className={style.main} onSubmit={submitdata}>
                    <div className={style.first}>
                        <h5 className={style.text}>Products</h5>
                        <Link to='/addnewproducts'> <button className={style.button}>Add New </button></Link>
                    </div>
                    <div className={style.second}>
                        <div>
                            Name
                        </div>
                        <div>
                            Pack Size
                        </div>
                        <div>
                            Category
                        </div>
                        <div>
                            MRP
                        </div>
                        <div>
                            Image
                        </div>
                        <div>
                            Status
                        </div>
                    </div>
                    {
                        data.map((i) => {


                            <div className={style.third}>
                                <div>{i.name}</div>
                                <div>{i.packsize}</div>
                                <div>{i.category}</div>
                                <div>{i.mrp}</div>
                                <div><img  src={`http://localhost:8000/upload/${i.image}`} alt="product image" /></div>
                                <div>{i.status}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}