import "./mainCompnents.css";
import MainHeading from "./MainHeading";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Video = ({ myVideo }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="video-box d-flex justify-content-center align-items-center gap-5 flex-column">
      <MainHeading sub="Discover" main="OUR VIDEO" />
      <Button
        onClick={() => setLgShow(true)}
        className="btn main-btn rounded-circle border-0 outline-0 px-4 py-3"
      >
        <i className="fs-5 fa-solid fa-play"></i>
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Pato Resturant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video controls muted autoPlay className="w-100">
            <source src={myVideo} type="video/mp4" />
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
