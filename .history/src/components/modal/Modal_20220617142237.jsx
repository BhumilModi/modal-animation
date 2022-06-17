import React, { useEffect, useRef } from "react";
import "./modal.css";
import { motion } from "framer-motion/types/render/dom/motion";

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-container"
      ref={modalRef}
    >
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
    </motion.section>
  );
};

export default Modal;
