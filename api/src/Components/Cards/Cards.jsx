import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContainer, Imagem, CardInfos } from './CardsStyle'
export default function Cards() {
  const [dados, setDados] = useState([]);

  const getDados = async () => {
    const Dados = await axios.get("https://rickandmortyapi.com/api/character");
    setDados(Dados.data.results);
    console.log(Dados)
  };

  useEffect(() => {
    getDados();
  }, []);

  const personagensSlice = dados.slice(0, 9);
  return (
    <CardContainer>
      {personagensSlice.map((personagem) => (
        <Card>
          <figure>
            <Imagem src={personagem.image} alt={personagem.name} />
          </figure><h2>{personagem.name}</h2>
          <CardInfos>
            <p>Status: {personagem.status}</p>
            <p>Specie: {personagem.species}</p>
            <p>Gender: {personagem.gender}</p>
            <p>Origin: {personagem.origin.name}</p>
          </CardInfos>
        </Card>
      ))}
    </CardContainer>
  )
};

