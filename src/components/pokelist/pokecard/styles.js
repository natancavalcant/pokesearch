import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 300px;

  padding: 1rem;
  border-radius: 20px;
  background-color: var(--medium-green-blue);

  background-image: ${props=> props.background? `url(${props.background})`: ''};
  background-repeat: no-repeat;
  background-size: cover;

  animation: animationOp 0.5s ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;


  @keyframes animationOp {
  0% {
    opacity: 0%;
  }

  50% {
    opacity: 50%;
  }

  100% {
    opacity: 100%;
  }
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  
  h1{
    font-size: 1.5rem;
    color: var(--white);
    text-shadow: 0 0 1px black;
  }

  h2 {
    font-size: 1rem;
    color: var(--white);
    text-shadow: 0 0 1px black;
  }
  
`;

export const ImageBox = styled.div`
  width: 245px;
  height: 245px;
  border-radius: 20px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    border-radius: 20px;
    object-fit: fill;
  }
`;