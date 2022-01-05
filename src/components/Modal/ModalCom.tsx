import React from "react";
import { Modal } from "react-bootstrap";

type IProps = {
  show: boolean;
  handleShow: () => void;
};

const ModalCom: React.FC<IProps> = ({ show, handleShow }: IProps) => {
  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Body className="bg-light rounded-sm">
        <iframe
          src="https://react-bootstrap.netlify.app"
          style={{ width: "100%", height: "100%"}}
          title="webView"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};
export default ModalCom;
