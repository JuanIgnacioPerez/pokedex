import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

function PokeStore({ details, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <h1>{details.name}</h1>
      <div className="pokeClose">
        <FaRegTimesCircle onClick={onClose} className="btnClose" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: rgb(238, 130, 238, 0.4);
  margin: 5px auto 10px;
  padding: 10px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  h1 {
    margin: 0;
  }
`;

export default PokeStore;
