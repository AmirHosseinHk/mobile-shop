import React from 'react'
import './EditMidal.css'
import { useEffect } from 'react';

export default function EditMidal({children,onSubmit,onClose}) {
    // useEffect(() => {
    //     const checkKey=(event)=>{
    //         console.log(event.keyCode)
    //       if (event.keyCode === 32) {
    //         onClose(false);
    //       }
    //     }
    
    //     window.addEventListener('keydown', checkKey);
        
    
    //     return ()=> window.removeEventListener('keydown',checkKey);
    //   });


    const EditModalHndler=(e)=>{
        onSubmit()
        e.preventDefault()
        
    }

  return (
    <div className="modal-parent active">
      
        <form className="edit-modal-form" style={{position:'relative'}}>
        <button type="button" class="btn-close" aria-label="Close" style={{position:'absolute',left:'0',top:'0'}} onClick={()=>{
          onClose(false)
        }}></button>

            <h1 className="edit-modal-title">اطلاعات جدید را وارد نمایید</h1>
            {children}
            <button className="edit-modal-submit" onClick={(e)=>EditModalHndler(e)}>ثبت اطلاعات جدید</button>
        </form>
    </div>
  )
}
