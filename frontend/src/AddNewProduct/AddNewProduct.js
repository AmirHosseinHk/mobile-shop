import React, { useEffect, useState } from 'react'
import './AddNewProduct.css'

function AddNewProduct({ getAllProducts }) {

    const [newAddedTitle, setNewAddedTitle] = useState('')
    const [newAddedCount, setNewAddedCount] = useState('')
    const [newAddedPopularity, setNewAddedPopularity] = useState('')
    const [newAddedColors, setNewAddedColors] = useState('')
    const [newAddedPrice, setNewAddedPrice] = useState('')
    const [newAddedImg, setNewAddedImg] = useState('')
    const [newAddedSale, setNewAddedSale] = useState('')


    // req body => {
    //     title => عنوان محصول
    //     price => مبلغ محصول
    //     count => موجودی محصول
    //     img => آدرس کاور محصول
    //     popularity => میزان محبوبیت محصول
    //     sale => میزان فروش
    //     colors => تعداد رنگ بندی
    // }
 


    const AddnewProductSubmit = (e) => {
        e.preventDefault();
        const AddNewProductObj = {
            title: newAddedTitle,
            price: newAddedPrice,
            count: newAddedCount,
            img: newAddedImg,
            popularity: newAddedPopularity,
            sale: newAddedSale,
            colors: newAddedColors
        }


        fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AddNewProductObj)
        }).then(res => res.json()).then(res2 => {
            console.log(res2)
            getAllProducts()
            emptyInput()

        })
                console.log('submitted')
    }
    function emptyInput() {
        setNewAddedTitle('');
        setNewAddedCount('');
        setNewAddedPopularity('');
        setNewAddedColors('');
        setNewAddedPrice('');
        setNewAddedImg('');
        setNewAddedSale('');
    }





    return (
        <div className='add-new-product-section'>
            <h1 className='add-product-title'>افزودن محصول</h1>
            <form action="/users" className='add-product-form'>
                <div className="add-product-form-wrap">
                    <div className="add-product-inp-grp">
                        <input value={newAddedTitle} type="text" className='add-product-input' onChange={(e) => setNewAddedTitle(e.target.value)} placeholder='اسم محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedCount} type="text" className='add-product-input' onChange={(e) => setNewAddedCount(e.target.value)} placeholder='موجودی محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedPopularity} type="text" className='add-product-input' onChange={(e) => setNewAddedPopularity(e.target.value)} placeholder='میزان محبوبیت محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedColors} type="text" className='add-product-input' onChange={(e) => setNewAddedColors(e.target.value)} placeholder='ظرفیت باتری   محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedPrice} type="text" className='add-product-input' onChange={(e) => setNewAddedPrice(e.target.value)} placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedImg} type="text" className='add-product-input' onChange={(e) => setNewAddedImg(e.target.value)} placeholder='آدرس عکس محصول را بنویسید' />
                    </div>
                    <div className="add-product-inp-grp">
                        <input value={newAddedSale} type="text" className='add-product-input' onChange={(e) => setNewAddedSale(e.target.value)} placeholder='حافظه ی داخلی  محصول را بنویسید' />
                    </div>
                </div>
                <button className='add-product-submit' onClick={(e) => AddnewProductSubmit(e)}>ثبت محصول</button>
            </form>
        </div>
    )
}

export default AddNewProduct