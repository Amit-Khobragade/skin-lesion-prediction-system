import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  min-width: max-content;
  width: 50%;
`;

function Popup({
  name,
  closePopup,
}: {
  name: string;
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Backdrop
        onClick={() => closePopup(false)}
        style={{ zIndex: 100 }}
      ></Backdrop>
      <Message
        className="bg-dark d-grid rounded"
        style={{ placeItems: "center", zIndex: 101 }}
      >
        <Image
          src={`/image/${name}.jpg`}
          className="rounded"
          alt={name}
          width={400}
          height={400}
        />
      </Message>
    </>
  );
}

export default Popup;
