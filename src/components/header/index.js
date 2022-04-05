import React from "react";
import { useState } from "react";

import { Container, Content, SearchBar, Submit } from "./styles";

export function Header({onChange}){
  const [showSearchBar, setShowSearchBar] = useState(false);

  function handlerClick(){
    setShowSearchBar(!showSearchBar)
  }

  return (
    <Container>
      <Content>
        <h1>PokeSearch</h1>    
        <span>
          <SearchBar show={showSearchBar} onChange={onChange}/>    
          <Submit>
            <img src="/assets/icons/search.svg" alt="buscar" onClick={handlerClick}/>
          </Submit>
        </span>
      </Content>
      
    </Container>
  )
}