import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

function NoRegion({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <div className="noRegion">
        <p>No se encuentran Pokemon en esta región</p>
        <div className="btnCont">
          <FaRegTimesCircle onClick={onClose} className="btnClose" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 82%;
  justify-content: flex-end;
  margin: 5px auto 10px;
`;

export default NoRegion;
