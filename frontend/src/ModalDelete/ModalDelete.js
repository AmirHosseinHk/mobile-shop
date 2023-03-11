import React from "react";
import "./ModalDelete.css";
import ReactDOM from "react-dom";

function ModalDelete({ accept, reject }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active" >
      <div className="comment-delete-modal">
        <h1 className="modal-title">آیا از حذف اطمینان دارید</h1>
        <div className="modal-btns">
          <button className="modal-btns-style modal-btns-accept" onClick={accept}>بله</button>
          <button className="modal-btns-style modal-btns-reject" onClick={reject}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("Modal-delete")
  );
}

export default ModalDelete;
