import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import {
  FaRegTimesCircle,
  FaWolfPackBattalion,
  FaPhoenixSquadron,
  FaGripfire,
  FaOptinMonster,
  FaBroom,
  FaSlackHash,
} from "react-icons/fa";

function ModalInfo({ details, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <Container>
      <Box>
        <div className="btnCont">
          <FaRegTimesCircle onClick={onClose} className="btnClose" />
        </div>
        <Title>{details.name}</Title>
        <InfoPoke>
          <div className="info">
            <FaSlackHash
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.id}
          </div>
          <div className="info">
            <FaBroom
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.color.name}
          </div>
          <div className="info">
            <FaWolfPackBattalion
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.egg_groups[0].name}
          </div>
          <div className="info">
            <FaPhoenixSquadron
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.habitat.name}
          </div>
          <div className="info">
            <FaGripfire
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.shape.name}
          </div>
          <div className="info">
            <FaOptinMonster
              color="rgba(253, 140, 139, 1)"
              size={30}
              style={{ marginRight: "5px" }}
            />
            {details.growth_rate.name}
          </div>
        </InfoPoke>
      </Box>
    </Container>,
    document.body
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 200;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow-y: hidden;
`;

const Title = styled.h1`
  color: #00a4c2;
  font-size: 3em;
  font-family: "pokemon solid", sans-serif;
  padding: 15px 0 20px;
  margin: 0;
  text-transform: capitalize;
`;

const Box = styled.div`
  border-radius: 5px;
  background: #fff9b0;
  padding: 0 50px 30px 20px;
  position: relative;
`;

const InfoPoke = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 240px;
`;

export default ModalInfo;
