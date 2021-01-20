import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;

  > h3 {
    margin-top: 2rem;
    color: #666;
  }

  @media (max-width: 425px) {
    padding: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: ${Colors.primary};
  text-transform: uppercase;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListItem = styled.div`
  border: 4px solid ${Colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  border: 4px solid transparent;

  @keyframes wiggle {
    0% {
      transform: rotateZ(-3deg);
    }
    25% {
      transform: rotateZ(3deg);
    }
    50% {
      transform: rotateZ(-3deg);
    }
    75% {
      transform: rotateZ(3deg);
    }

    100% {
      transform: rotateY(0deg);
    }
  }

  &:hover {
    cursor: pointer;
    border: 4px solid ${Colors.primary};
    animation: wiggle;
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    animation-duration: 0.4s;
    p {
      color: #999;
      width: 100%;
    }
  }
  img {
    width: 100%;
  }

  h1 {
    color: #fff;
  }
  p {
    font-size: 1rem;
    color: #333;
  }
`;

export const Links = styled.div`
  display: flex;

  a {
    margin-left: 1rem;
    margin-top: 1rem;
    svg {
      width: 2rem;
      height: 2rem;
      fill: #999;
      transform: scale(0.75);
      transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1);
        fill: ${Colors.primary};
      }
    }
  }
`;
