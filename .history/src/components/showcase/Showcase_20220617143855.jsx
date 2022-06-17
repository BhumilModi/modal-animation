import React, { useState } from "react";
import "./Showcase.css";
import { images } from "../../data";
import Modal from "../modal/Modal";
const Showcase = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  return (
    <section className="showcase">
      {images.length > 0 &&
        images.map((image) => (
          <img
            src={image.url}
            key={image.id}
            alt="car"
            onClick={() => {
              setIsModal(true);
              setModalImage(image.url);
            }}
          />
        ))}
      {isModal && (
        <Modal
          isModal={isModal}
          setIsModal={setIsModal}
          modalImage={modalImage}
          setModalImage={setModalImage}
        />
      )}
    </section>
  );
};

export default Showcase;
