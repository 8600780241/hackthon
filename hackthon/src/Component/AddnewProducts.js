
import React from "react";
import Header from './Header'
import style from '../Style/Addcategory.module.css'
import { useState } from "react";
export default function AddnewProducts(){
    const [product, setProduct] = useState({
        category: "",
        productname: "",
        packSize:"",
        mrp:"",
        productimage:"",
        status:[]
    });
    function setproductValue(e) {
        setProduct(
            ...product,
            [e.target.name] = e.target.value
        )
    }
    function submitForm(e) {
        e.preventDefault();
        console.log(product);
        fetch('http://localhost:/8000/api/v1/product/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        }

        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                throw new error
            })

    }
    return(
        <>
        <div>
                <Header />
                <h5 className={style.text}>Add Product</h5>
                <div  className={style.main} onSubmit={submitForm}>
                <div  className="status"><label>Category </label>
                        <select >
                            <option>Milk</option>
                            <option>Fruits</option>
                            <option>Grocery</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Product Name" className={style.input} value={product.productname} onChange={setproductValue}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Pack Size" className={style.input} value={product.packSize} onChange={setproductValue}/>
                    </div>
                    <div>
                        <input type="text" placeholder="MRP" className={style.input} value={product.mrp} onChange={setproductValue}/>
                    </div>
                    <div>
                       Product Image <input type="file"  placeholder="product image" value={product.productimage} onChange={setproductValue}/>
                    </div>
                    <div  className="status" value={product[0]} onChange={(e) => {setproductValue(e)}}><label>Status  </label>
                        <select >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <button className={style.save}>Save</button>
                </div>
                <div>
                    <button className={style.cancle}>cancle</button>
                    
                </div>
            </div>
        </>
    )
}