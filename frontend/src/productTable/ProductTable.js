import React, { useState, useEffect } from "react";
import "./ProductTable.css";
import ModalDelete from '../ModalDelete/ModalDelete'
import DetailsModal from "../DetailsModal/DetailsModal";
import EditMidal from "../EditMidal/EditMidal";
import { AiOutlineDollarCircle } from 'react-icons/ai'
import ErrorBox from "../ErrorBox/ErrorBox";
function ProductTable({getAllProducts,AllProducts}) {

  

  useEffect(()=>{
    getAllProducts()
  },[])

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowDetailModal, setIsShowDetailModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  
  const [productID, setProductID] = useState(null)
  const [mainProductInfo, setMainProductInfo] = useState({})

  //   req body => {
  //     title => عنوان محصول
  //     price => مبلغ محصول
  //     count => موجودی محصول
  //     img => آدرس کاور محصول
  //     popularity => میزان محبوبیت محصول
  //     sale => میزان فروش
  //     colors => تعداد رنگ بندی
  // }

  const [newTitleInfo, setNewTitleInfo] = useState('')
  const [newPriceInfo, setNewPriceInfo] = useState('')
  const [newCountInfo, setNewCountInfo] = useState('')
  const [newImgInfo, setNewImgInfo] = useState('')
  const [newPopularityInfo, setNewPopularityInfo] = useState('')
  const [newSaleInfo, setNewSaleInfo] = useState('')
  const [newColorsInfo, setNewColorsInfo] = useState('')


  function spaceHndler() {
    setIsShowDetailModal(false)
  }

  function detailModalHandler() {
    setIsShowDetailModal(true)


  }

  function priceDevider(num) {
    const number = new Intl.NumberFormat('en-US', { style: "decimal" }).format(num);
    return number
  }


  const ModalAcceptAction = () => {
    console.log('accepted')
    console.log(productID)
    console.log("مدال تایید شد");
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(result => {
        setIsShowDeleteModal(false);
        getAllProducts()
      })
  }

  const ModalRejectAction = () => {
    console.log('rejected')
    setIsShowDeleteModal(false)
  }

  const editModalHndler = (e) => {
    const newEditedProductInfo = {
      id: productID,
      title: newTitleInfo,
      price: newPriceInfo,
      count: newCountInfo,
      img: newImgInfo,
      popularity: newPopularityInfo,
      sale: newSaleInfo,
      colors: newColorsInfo
    }

    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEditedProductInfo)
    }).then(res => res.json()).then(res2 => {
      console.log(res2)
      getAllProducts()
    })
    setIsShowEditModal(false)
    console.log('اطلاعات ویرایش شد')
  }
  return (
    <>



      {
        AllProducts.length ? (<table className="product-table">
          <thead>
            <tr className="product-table-headTR">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {
              AllProducts.map(product => (
                <tr key={product.id} className="product-table-tr">
                  <td>
                    <img src={product.img} alt="" className="product-table-img" />
                  </td>
                  <td>{product.title}</td>
                  <td>{priceDevider(product.price)} تومان</td>
                  <td>{product.count}</td>
                  <td>
                    <button className="product-table-btn" onClick={() => {
                      detailModalHandler()
                      setMainProductInfo(product)
                    }


                    }>جزئیات</button>
                    <button className="product-table-btn" onClick={() => {
                      setIsShowDeleteModal(true)
                      setProductID(product.id)
                    }}>حذف</button>
                    <button className="product-table-btn" onClick={() => {
                      setIsShowEditModal(true)
                      setProductID(product.id)
                      setNewTitleInfo(product.title)
                      setNewPriceInfo(product.price)
                      setNewCountInfo(product.count)
                      setNewImgInfo(product.img)
                      setNewPopularityInfo(product.popularity)
                      setNewSaleInfo(product.sale)
                      setNewColorsInfo(product.colors)
                    }}>ویرایش</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>) : <ErrorBox msg="هیچ محصولی یافت نشد" />

      }


      {isShowDeleteModal && <ModalDelete accept={ModalAcceptAction} reject={ModalRejectAction} />}
      {isShowDetailModal && <DetailsModal onHideState={spaceHndler}  >


        <table className="detail-modal-table">
          
          <thead style={{ width: "100%" ,position:'relative'}} >
          <button type="button" class="btn-close" aria-label="Close" style={{position:'absolute',left:'0'}} onClick={()=>{
            setIsShowDetailModal(false)
          }}></button>

            <tr className="detail-modal-tr">
              <td>محبوبیت</td>
              <td>حافظه داخلی(گیگابایت)</td>
              <td>ظرفیت باتری (mAh)</td>
              
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td>{mainProductInfo.popularity}%</td>
              <td>{priceDevider(mainProductInfo.sale)}</td>
              <td>{mainProductInfo.colors}</td>

            </tr>
          </tbody>
        </table>
      </DetailsModal>}
      {
        isShowEditModal && <EditMidal onClose={setIsShowEditModal} onSubmit={editModalHndler}>
          
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewTitleInfo(e.target.value)} value={newTitleInfo} placeholder="عنوان جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewPriceInfo(e.target.value)} value={newPriceInfo} placeholder="قیمت جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewCountInfo(e.target.value)} value={newCountInfo} placeholder="میزان موجودی جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewImgInfo(e.target.value)} value={newImgInfo} placeholder="آدرس کاور جدید جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewPopularityInfo(e.target.value)} value={newPopularityInfo} placeholder="میزان محبوبیت  جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewSaleInfo(e.target.value)} value={newSaleInfo} placeholder="حافظه ی داخلی  جدید را وارد کنید" />
          </div>
          <div className="edit-product-form-group">
            <span><AiOutlineDollarCircle /> </span>
            <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewColorsInfo(e.target.value)} value={newColorsInfo} placeholder="  ظرفیت باتری جدید را وارد کنید" />
          </div>
        </EditMidal>
      }

    </>
  )
}

export default ProductTable;

