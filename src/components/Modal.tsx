import ReactDOM from "react-dom";
import { useEffect } from "react";

interface ModalProps {
  open?: boolean;
  onCloseModal: () => void;
}

const Modal = ({ onCloseModal }: ModalProps) => {
  const modalDiv = document.getElementById("modal-container")!;

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onCloseModal}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">CONTENT</div>
    </div>,
    modalDiv
  );
};

export default Modal;
