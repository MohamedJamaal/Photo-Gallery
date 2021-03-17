import React from 'react';
import {motion} from 'framer-motion'

// modal for open pic when click on it
const Modal = ({ selectedImg, setSelectedImg }) => {
    
    const handleClick = (e) => {
        // if check to prevent close pic when click on it ,
        // but click pic when click on backdrop
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img
                src={selectedImg}
                alt="enlarged pic"
                initial={{ y: '-100vh' }}
                animate={{y:0}}
            />
        </motion.div>
    )
}

export default Modal;