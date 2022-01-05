import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsCardHeading } from "react-icons/bs";
import Form from "./SideBar/FormCom";

type IProps = {
  extendBar: boolean;
  setExtendBar: React.Dispatch<React.SetStateAction<boolean>>;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
  toggle: string;
};

const SideBar: React.FC<IProps> = ({
  extendBar,
  setExtendBar,
  setToggle,
  toggle,
}: IProps) => {
  return (
    <Card
      style={{
        width: extendBar ? "80%" : "30%",
        height: "110vh",
        float: "left",
      }}
      className="sidebar bg shadow-lg"
    >
      <Row>
        <Col style={{ maxWidth: "450px" }}>
          <div className="p-5">
            {/* User */}
            <Card className="p-3 my-4 rounded-sm shadow-lg">
              <div className="d-flex align-items-center">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GhB0F34TDxS-hDczxFQLyayBwzEJ1k3hS-neL2o=s96-c"
                  alt="imgData"
                  width="70"
                  height="70"
                  className="rounded-circle"
                />
                <div className="mx-3">
                  <h5 className="fw-bold">Hi, Reader,</h5>
                  <span>Here's your News!</span>
                </div>
              </div>
            </Card>
            {/* Toggle */}
            {!extendBar && (
              <Card className="p-3 text-center my-4 rounded-sm fw-bold shadow-lg fw-bold">
                <h5 className="fw-bold">View Toggle</h5>
                <div className="d-flex justify-content-center toggle-icon my-4">
                  <BsCardHeading
                    onClick={() => setToggle("card")}
                    className={
                      toggle === "card"
                        ? "bg-second pointer rounded"
                        : "pointer bg-light rounded"
                    }
                  />
                  <AiOutlineUnorderedList
                    onClick={() => setToggle("list")}
                    className={
                      toggle === "list"
                        ? "bg-second pointer rounded"
                        : "pointer bg-light rounded"
                    }
                  />
                </div>
              </Card>
            )}
            {/* Feedback */}
            <Card className="p-3 text-center my-4 rounded-sm shadow-lg">
              <h5 className="fw-bold">Have a Feedack?</h5>
              <div
                className="d-flex justify-content-center p-3 my-3 pointerfw-bold fw-bold pointer rounded"
                style={{
                  backgroundColor: extendBar ? "#EBA3A6" : "#98EEC9",
                  boxShadow: "inset 0px 0px 30px rgba(0,0,0,0.3)",
                }}
                onClick={() => setExtendBar(!extendBar)}
              >
                We're Listening!
              </div>
            </Card>
          </div>
        </Col>
        {/* Form */}
        {extendBar && (
          <Col className="d-flex justify-content-center align-items-center">
            <Form />
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default SideBar;
