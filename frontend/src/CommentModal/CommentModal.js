import React from 'react'
import './CommentModal.css'
function CommentModal({ children, onHide }) {
    return (
        <div className={onHide ? `modal-parent active` : 'modal-parent'}>
            {children}
        </div>
    )
}

export default CommentModal