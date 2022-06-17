import React, { useState } from "react";
import "./Showcase.css";
import { images } from "../../data";
import Modal from "../modal/Modal";
import { AnimatePresence } from "framer-motion";

const Showcase = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  return (
    <section className="showcase">
      {images.length > 0 &&
        images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt=""
            onClick={() => {
              setIsModal(true);
              setModalImage(image.url);
            }}
          />
        ))}
      <AnimatePresence>
        {isModal && (
          <Modal
            setModalImage={setModalImage}
            modalImage={modalImage}
            isModal={isModal}
            setIsModal={setIsModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;
