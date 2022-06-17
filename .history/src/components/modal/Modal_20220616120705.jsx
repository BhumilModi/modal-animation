import React, { useEffect, useRef } from "react";
import "./modal.css";

const Modal = ({ isModal, setIsModal, modalImage, setModalImage }) => {
  const modalRef = useRef();

  useEffect(() => {
    const getClickOutside = (e) => {
      if (isModal && e.target === modalRef.current) {
        setIsModal(false);
        setModalImage("");
      }
    };
    window.addEventListener("click", getClickOutside);

    return () => {
      window.removeEventListener("click", getClickOutside);
    };
  }, [isModal, setIsModal, setModalImage]);

  return (
    <section className="modal-container" ref={modalRef}>
      <img src={modalImage} alt="" />
      <button
        className="close"
        onClick={() => {
          setIsModal(false);
          setModalImage("");
        }}
      >
        x
      </button>
    </section>
  );
};

export default Modal;
