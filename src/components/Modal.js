import React from 'react';
import './cssModal.css';
import { AiOutlineClose } from "react-icons/ai";



export default function Modal({id="modal",onClose = () => {}, children}) {

    const handleOutsideClick = (e) =>{
        if(e.target.id ==id) onClose();
    }

return(
    <div id={id} className='modal' onClick={handleOutsideClick}>
        <div className='containerModal'>
            <button className='close' onClick={onClose}><AiOutlineClose size={20}/></button>
            <div className='content'>{children}</div>   
        </div>    
     </div>
)
 
}
