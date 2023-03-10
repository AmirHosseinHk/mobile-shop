import React, { useEffect, useState } from 'react'
import './Users.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import CommentDeleteModal from '../CommentDeleteModal/CommentDeleteModal'
import EditCommentModal from '../EditCommentModal/EditCommentModal'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import DetailsModal from '../DetailsModal/DetailsModal'


function Users() {

  const [allUsers, setAllUsers] = useState([])
  const [deleteUserModal, setDeleteUserModal] = useState(false)
  const [userID, setUserID] = useState(null)
  const [userShowEditModal, setUserShowEditModal] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [mainUserInfo, setMainUserInfo] = useState([])
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newUserName, setNewUserName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newAddress, setNewAddress] = useState('')
  const [newScore, setNewScore] = useState('')
  const [newBuy, setNewBuy] = useState('')

  const showDetailModalHndler = () => setShowDetailModal(false)

  const getAllusers = () => {
    fetch('http://localhost:8000/api/users').then(res => res.json()).then(res2 => {
      console.log(res2)
      setAllUsers(res2)
    })
  }

  useEffect(() => {
    getAllusers()
  }, [])

  const userAcceptDelete = () => {
    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: 'DELETE'
    }).then(res => res.json()).then(res2 => {
      console.log(res2)
      setDeleteUserModal(false)
      getAllusers()
    })
  }

  const userUpdateHandler = (e) => {
    e.preventDefault()
    console.log('ویزایش سیکیم')
    const newUserInfos = {
      firsname: newFirstName,
      lastname: newLastName,
      username: newUserName,
      password: newPassword,
      phone: newPhone,
      city: newCity,
      email: newEmail,
      address: newAddress,
      score: newScore,
      buy: newBuy
    }
    console.log(newUserInfos)

    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserInfos),
    }).then(res => res.json()).then(res2 => {
      console.log(res2)
      setUserShowEditModal(false)
      getAllusers()
    })
  }
  function priceDevider(num) {
    const number = new Intl.NumberFormat('en-US', { style: "decimal" }).format(num);
    return number
  }
  const userRejectDelete = () => setDeleteUserModal(false)
  return (
    <div>
      {allUsers.length ? <table className='comnts-table'>

        <thead><tr>
          <th>نام و نام خانوادگی</th>
          <th>یوزرنیم</th>
          <th>رمز عبور</th>
          <th>شماره تماس</th>
          <th>ایمیل</th>

        </tr></thead>
        <tbody>
          {allUsers.map(user => (
            <tr key={user.id}>
              <td>{user.firsname} {user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => {
                  setUserID(user.id)
                  setDeleteUserModal(true)
                }}>حذف</button>
                <button style={{ marginLeft: '5px', marginRight: '5px' }} onClick={()=>{
                  setUserID(user.id)
                  setShowDetailModal(true)
                  setMainUserInfo(user)
                  console.log('main',mainUserInfo)
                }}>جزئیات</button>
                <button onClick={() => {
                  setUserID(user.id)
                  setUserShowEditModal(true)
                  setNewFirstName(user.firsname)
                  setNewLastName(user.lastname)
                  setNewUserName(user.username)
                  setNewPassword(user.password)
                  setNewPhone(user.phone)
                  setNewCity(user.city)
                  setNewEmail(user.email)
                  setNewAddress(user.address)
                  setNewScore(user.score)
                  setNewBuy(user.buy)

                }

                }>ویرایش</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> : <ErrorBox msg='هیچ کاربری یافت نشد' />
      }
      <CommentDeleteModal onDelete={deleteUserModal} title={'آیا از حذف کاربر اطمینان دارید'} accept={userAcceptDelete} reject={userRejectDelete}>

      </CommentDeleteModal>
      <EditCommentModal onHide={userShowEditModal} setonHide={setUserShowEditModal} onEdit={userUpdateHandler}>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} placeholder="عنوان جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewLastName(e.target.value)} value={newLastName} placeholder="قیمت جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewUserName(e.target.value)} value={newUserName} placeholder="میزان موجودی جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} placeholder="آدرس کاور جدید جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewPhone(e.target.value)} value={newPhone} placeholder="میزان محبوبیت  جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewCity(e.target.value)} value={newCity} placeholder="میزان فروش جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewEmail(e.target.value)} value={newEmail} placeholder=" تعداد رنگبندی جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewAddress(e.target.value)} value={newAddress} placeholder=" تعداد رنگبندی جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewScore(e.target.value)} value={newScore} placeholder=" تعداد رنگبندی جدید را وارد کنید" />
        </div>
        <div className="edit-product-form-group">
          <span><AiOutlineDollarCircle /> </span>
          <input type="text" className="edit-product-form-group-input" onChange={(e) => setNewBuy(e.target.value)} value={newBuy} placeholder=" تعداد رنگبندی جدید را وارد کنید" />
        </div>
      </EditCommentModal>
      {showDetailModal && <DetailsModal onHideState={showDetailModalHndler}>
        <table className="detail-modal-table">
          <thead style={{ width: "100%" }}>

            <tr className="detail-modal-tr">
              <td>شهر</td>
              <td>آدرس</td>
              <td>امتیاز</td>
              <td>میزان خرید</td>
              <button type="button" class="btn-close" aria-label="Close" onClick={()=>setShowDetailModal(false)}></button>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mainUserInfo.city}</td>
              <td>{mainUserInfo.address}</td>
              <td>{mainUserInfo.score}</td>

              <td>{priceDevider(mainUserInfo.buy)}</td>

            </tr>
          </tbody>
        </table>
      </DetailsModal>}

    </div >
  )
}

export default Users