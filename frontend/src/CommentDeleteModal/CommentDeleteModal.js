import React from 'react'

function CommentDeleteModal({ accept, reject, title, onDelete }) {
    return (
        <div className={onDelete ? "modal-parent active" : 'modal-parent'}>
            <div className="comment-delete-modal">
                <h1 className="modal-title">{title}</h1>
                <div className="modal-btns">
                    <button className="modal-btns-style modal-btns-accept" onClick={accept}>بله</button>
                    <button className="modal-btns-style modal-btns-reject" onClick={reject}>خیر</button>
                </div>
            </div>

        </div>)
}

export default CommentDeleteModal