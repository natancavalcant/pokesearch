import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--white);
  position: relative;
`;

export const Content = styled.div`
  max-width: 1300px;
  height: 120px;

  margin: 0 auto;
  padding: 2rem;
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: var(--white);
  }

  span {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const SearchBar = styled.input`
  width: 0px;
  height: 30px;

  border-radius: 20px;
  border: none;
  outline: none;

  padding: 0px;

  background-color: white;
  color: var(--black);

  
  transition: width 200ms, padding 200ms;
    ${
      props => 
      props.show
      && css`
        width: 300px;
        padding: 10px;
      `
    }

  @media (max-width: 720px){
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    height: 0;
    padding: 0;
    border-radius: 0;

    transition: height 200ms, padding 200ms;
    ${
      props => 
      props.show
      && css`
        height: 30px;
        padding: 10px;
      `
    }
    
  }
`;

export const Submit = styled.button`
  width: 30px;
  height: 30px;

  border: none;
  
  color: var(--white);
  background-color: transparent;
`;