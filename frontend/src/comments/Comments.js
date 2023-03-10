import React, { useEffect, useState } from 'react'
import './Comments.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import CommentModal from '../CommentModal/CommentModal'
import CommentDeleteModal from '../CommentDeleteModal/CommentDeleteModal'
import EditCommentModal from '../EditCommentModal/EditCommentModal'
import { Form } from 'react-bootstrap'

function Comments() {
  const [AllComments, setAllComments] = useState([])
  const [commentBodyShow, setCommentBodyShow] = useState(false)
  const [commentBody, setCommentBody] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [commentMainBody, setCommentMainBody] = useState('')
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false)
  const [isShowRejectModal, setIsShowRejectModal] = useState(false)



  const getAllComments = () => {
    fetch('http://localhost:8000/api/comments').then(res => res.json()).then(comment => setAllComments(comment))
  }
  const accept = () => {
    fetch(`http://localhost:8000/api/comments/${deleteId}`, {
      method: 'DELETE'

    }).then(res => res.json()).then(result => {
      setDeleteModal(false)
      getAllComments()
    })
  }

  const reject = () => {
    setDeleteModal(false)
  }

  useEffect(() => {
    getAllComments()

  }, [])

  function EditModalHndler(e) {
    e.preventDefault()
    console.log('ثبت شد')
    setShowEditModal(false)
    fetch(`http://localhost:8000/api/comments/${deleteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: commentMainBody
      })
    }).then(res => res.json()).then(res2 => {
      setShowEditModal(false)
      getAllComments()
    })
  }

  const rejectAcceptModal = () => setIsShowAcceptModal(false)
  const rejectRejectModal = () => setIsShowRejectModal(false)

  const acceptAcceptModal = () => {

    fetch(`http://localhost:8000/api/comments/accept/${deleteId}`, {
      method: 'POST'
    }).then(res => res.json()).then(res2 => {
      console.log(res2)
      setIsShowAcceptModal(false)
      getAllComments()
    })
  }

  const acceptRejectModal = () => {
    fetch(`http://localhost:8000/api/comments/reject/${deleteId}`, {
      method: 'POST'
    }).then(res => console.log(res.json())).then(res2 => {
      console.log(res2)
      setIsShowRejectModal(false)
      getAllComments()
    })
  }

  const showModalHndler = () => setCommentBodyShow(false)
  return (
    
      <div>
        {AllComments.length ? <div className="comments-main">
        <table className='comnts-table'>
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>

            {AllComments.map(item => (
              <tr key={item.id}>
                <td>{item.userID}</td>
                <td>{item.productID}</td>
                <td><button style={{marginLeft:'5px',marginRight:'5px'}} onClick={() => {
                  setCommentBodyShow(true)
                  setCommentBody(item.body)
                }}>دیدن کامنت</button></td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>
                  <button onClick={() => {
                    setDeleteId(item.id)
                    setDeleteModal(true)
                  }}>حذف</button>
                  <button style={{marginLeft:'5px',marginRight:'5px'}} onClick={() => {
                    setShowEditModal(true)
                    setCommentMainBody(item.body)
                    setDeleteId(item.id)

                  }}>ویرایش</button>
                  <button style={{marginLeft:'5px'}}>پاسخ</button>
                  {!item.isAccept == 1 ? <button onClick={() => {
                    setDeleteId(item.id)
                    setIsShowAcceptModal(true)
                  }}>تایید</button> : <button onClick={() => {
                    setDeleteId(item.id)
                    setIsShowRejectModal(true)
                  }}>رد</button>}
                </td>
              </tr>
            ))}



          </tbody>
        </table>
        <CommentModal onHide={commentBodyShow}>
          <p className='comment-container'>
            {commentBody}
            <button type="button" class="btn-close" aria-label="Close" onClick={() => setCommentBodyShow(false)}></button>

          </p>
        </CommentModal>
        <CommentDeleteModal onDelete={deleteModal} accept={accept} reject={reject} title={'آیا از حذف اطمینان دارید'}>

        </CommentDeleteModal>
        <EditCommentModal onHide={showEditModal} onEdit={EditModalHndler} setonHide={setShowEditModal}>
        <Form.Control as="textarea" onChange={(e) => setCommentMainBody(e.target.value)} value={commentMainBody} >

{commentMainBody}

</Form.Control>


        </EditCommentModal>
        <CommentDeleteModal onDelete={isShowAcceptModal} title={'آیا از تایید اطمینان دارید؟'} accept={acceptAcceptModal} reject={rejectAcceptModal}></CommentDeleteModal>
        <CommentDeleteModal onDelete={isShowRejectModal} title={'آیا از رد اطمینان دارید؟'} accept={acceptRejectModal} reject={rejectRejectModal}></CommentDeleteModal>

        </div>:        <ErrorBox msg='هیچ نظری یافت نشد' />}


      </div>  
    
  )
}

export default Comments