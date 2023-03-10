import React from 'react'

function EditCommentModal({ children, onHide, setonHide, onEdit }) {
    return (
        <div>
            <div className={onHide ? "modal-parent active" : 'modal-parent'}>

                <form className="edit-modal-form" style={{ position: 'relative', overflowY: 'scroll' }}>
                    <button type="button" class="btn-close" style={{ position: 'absolute', top: '0', left: '0' }} aria-label="Close" onClick={() => setonHide(false)}></button>


                    <h1 className="edit-modal-title">اطلاعات جدید را وارد نمایید</h1>

                    {children}


                    <button className="edit-modal-submit" onClick={(e) => onEdit(e)}>ثبت اطلاعات جدید</button>


                </form>


            </div>

        </div>)
}

export default EditCommentModal