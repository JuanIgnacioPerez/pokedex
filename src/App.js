import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Region from "./components/region";
import Modal from "./components/modal";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PokeStore from "./components/pokeStore";

import "./styles.css";
//import { PokeProvider, usePoke } from "./context/context";

/* export default()=> <PokeProvider>
  <App></App>
</PokeProvider>  */

const api = "https://pokeapi.co/api/v2/";

async function pokedex(index = 1) {
  const { data } = await axios.get(api + "generation/" + index);
  return data.pokemon_species;
}

async function pokeType(url) {
  const { data } = await axios.get(url);
  return data;
}

function App() {
  const [pokemon, setPokemon] = useState("");
  const [details, setDetails] = useState();
  const [open, setOpen] = useState(false);
  const [store, setStore] = useState(false);

  async function onRegionPress(generation) {
    const pokeGen = await pokedex(generation);
    setPokemon(pokeGen);
  }

  async function pokeDetails(url) {
    const details = await pokeType(url);
    setDetails(details);
    setOpen(true);
  }

  async function dexStore(url) {
    const details = await pokeType(url);
    setDetails(details);
    setStore(true);
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
    <div id="app" className="app">
      <Title>Pokédex</Title>
      <Region onRegionPress={onRegionPress}></Region>
      <PokeStore
        isOpen={store}
        onClose={() => setStore(false)}
        details={details}
      />
      <Container>
        {!!pokemon &&
          pokemon.map((pokemon) => (
            <Box key={pokemon.name}>
              <div
                className="infoPoke"
                onClick={(e) => pokeDetails(pokemon.url)}
              >
                <FaHeart /> <FaRegHeart />
              </div>
              <img
                onClick={(e) => dexStore(pokemon.url)}
                src={imgGen(pokemon.url)}
                alt="pokeimg"
              ></img>
              <Name>{pokemon.name}</Name>
            </Box>
          ))}
        <Modal isOpen={open} onClose={() => setOpen(false)} details={details} />
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
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  img {
    cursor: pointer;
  }
`;

const Name = styled.div`
  text-transform: capitalize;
  text-align: center;
  p {
    margin: 5px auto 10px 0;
  }
`;

export default App;
