import React from 'react'
import './Modal.css'

import icon from '../../assets/cancel.png'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropogation()}>
            <img src={icon} className='icon' />
            {children}
        </div>
    </div>
  )
}

export default Modal