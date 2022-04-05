import React from "react";

import { PokeCard } from "./pokecard";
import { Container, Content } from "./styles";

export function Pokelist({pokes}){

  return (
    <Container>
      <Content>
        {pokes.map((poke)=><PokeCard key={poke.id}  poke={poke}/>)}        
        <PokeCard />
      </Content>
    </Container>
  )
}