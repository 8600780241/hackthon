import React, { useState } from "react";
import Header from './Header'
import style from '../Style/Addcategory.module.css'
export default function AddnewCategory() {
    const [category, setCategory] = useState({
        categoryName: "",
        description: "",
        status: []
    });
    function setCategoryValue(e) {
        setCategory(
            ...category,
            [e.target.name] = e.target.value
        )
    }
    function submitForm(e) {
        e.preventDefault();
        console.log(category);
        fetch('http://localhost:/8000/api/v1/category/addcategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)
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
    return (
        <>
            <div>
                <Header />
                <h5 className={style.text}>Add Category</h5>
                <div className={style.main} onSubmit={submitForm}>
                    <div>
                        <input type="text" placeholder="Category Name" className={style.input} value={category.categoryName} onChange={setCategoryValue} />
                    </div>
                    <div>
                        <input type="text" placeholder="description" className={style.input} value={category.description} onChange={setCategoryValue} />
                    </div>
                    <div className="status"><label>Status  </label>
                        <select value={category[0]} onChange={(e) => { setCategoryValue(e) }} >
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