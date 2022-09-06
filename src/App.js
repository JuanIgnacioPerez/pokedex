import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Region from "./components/region";
import "./styles.css";

const api = "https://pokeapi.co/api/v2/generation/";

async function pokedex(index = 1) {
  const { data } = await axios.get(api + index);
  return data.pokemon_species;
}

function App() {
  const [pokemon, setPokemon] = useState("");

  async function onRegionPress(generation) {
    const pokeGen = await pokedex(generation);
    setPokemon(pokeGen);
  }

  useEffect(() => {
    async function poke() {
      const newPokemon = await pokedex();
      setPokemon(newPokemon);
    }
    poke();
  }, []);

  const imgGen = (url) => {
    const id = url.match(/\d+/g)[1];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return imgUrl;
  };

  return (
    <div className="app">
      <Title>Pokédex</Title>
      <Region onRegionPress={onRegionPress}></Region>
      <Container>
        {!!pokemon &&
          pokemon.map((pokemon) => (
            <Box key={pokemon.name}>
              <img src={imgGen(pokemon.url)} alt="pokeimg"></img>
              <p style={{ margin: "0 0 10px", textTransform: "capitalize" }}>
                {pokemon.name}
              </p>
            </Box>
          ))}
      </Container>
    </div>
  );
}

const Title = styled.h1`
  color: #00a4c2;
  text-align: center;
  font-size: 4em;
  font-family: "pokemon solid", sans-serif;
  margin: 30px 0 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background: rgba(255, 255, 255, 0.4);
  margin: 5px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  max-width: 134px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default App;
