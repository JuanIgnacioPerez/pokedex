import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Region({ onRegionPress }) {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    const api = "https://pokeapi.co/api/v2/region/";
    const location = async () => {
      const { data } = await axios.get(api);
      setRegion(data.results);
    };
    location();
  }, []);

  return (
    <Location>
      {region.map((region, index) => (
        <Box key={region.name} onClick={() => onRegionPress(index + 1)}>
          <p>{region.name}</p>
        </Box>
      ))}
    </Location>
  );
}

const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const Box = styled.button`
  margin: 10px 15px;
  padding: 10px 20px;
  background: white;
  border: 1px solid #00a4c2;
  box-shadow: #00a4c2;
  border-radius: 5px;
  cursor: pointer;
  p {
    margin: 0;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transition: all 0.5s ease-in;
  }
`;

export default Region;
