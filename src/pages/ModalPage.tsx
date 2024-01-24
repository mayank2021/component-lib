import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      {showModal && <Modal onCloseModal={onCloseModal} />}
    </div>
  );
};

export default ModalPage;
