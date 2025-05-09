import { useEffect } from "react";
import { GoX } from "react-icons/go";

function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  })
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  } 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}>
      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] no-scrollbar overflow-y-auto relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}><GoX /></button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;