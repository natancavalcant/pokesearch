import React from "react";

import { Container, Content, ImageBox } from "./styles";

export function PokeCard({poke}){

  return poke? (
    <Container  background={poke.background_image_url}>
      <Content>
        <ImageBox >
          <img src={poke.image_url} alt={poke.name} onDragStart={(e) => e.preventDefault()}/>
        </ImageBox>
        <h1>{poke.name}</h1>
        <h2>{poke.category}</h2>
      </Content>
    </Container>
  ):'';
}