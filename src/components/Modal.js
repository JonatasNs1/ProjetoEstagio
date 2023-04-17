import React from 'react';
import { GrClose } from "react-icons/gr";
import '../styles/modal.scss';


export default function Modal({id="productsName",onClose = () => {}, children}) {
 

    const handleOutsideClick = (e) =>{
        if(e.target.id ==id) onClose();
    }

return(
 
        
    <div id={id} className='modal' onClick={handleOutsideClick}>
        <div className='containerModal'>
          <div className='close' >
          <button onClick={onClose}><GrClose size={30}/></button>
          </div>
            <div className='content'>{children}</div>   
        </div>    
    
    </div>
      
)
 
}



