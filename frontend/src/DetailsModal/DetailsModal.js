import React, { useEffect, useState } from "react";
import "./DetailsModal.css";

function DetailsModal({onHideState,children }) {
  useEffect(() => {
    const checkKey=(event)=>{
        console.log(event.keyCode)
      if (event.keyCode === 32) {
        onHideState();
      }
    }

    window.addEventListener('keydown', checkKey);
    

    return ()=> window.removeEventListener('keydown',checkKey);
  });
  return (
    <div className="modal-parent active">
     {children}
    </div>
  );
}

export default DetailsModal;
