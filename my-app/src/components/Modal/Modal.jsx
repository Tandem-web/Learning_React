import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

import './modal.css'

function Modal({isOpen, onClose, children}) {
    const modalRef = useRef();

    const handleOverlayClick = (e) => {
        if (!modalRef.current?.contains(e.target)) {
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
        onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={() => handleOverlayClick()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                <FaXmark />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;