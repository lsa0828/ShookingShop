import { useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white text-sm px-4 py-2 rounded-2xl shadow-md z-50 animate-fade-in">
      {message}
    </div>
  );
}

export default Toast;