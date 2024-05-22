import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line no-unused-vars
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center h-screen w-screen absolute top-0 z-40 backdrop-blur">
          <div className="m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
