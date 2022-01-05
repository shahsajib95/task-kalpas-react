import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

type Props = {
  children: React.ReactElement;
  waitBeforeShow?: number;
};

const DelayedFallback = ({ children, waitBeforeShow = 500 }: Props) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    console.log(waitBeforeShow);
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? (
    children
  ) : (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default DelayedFallback;
