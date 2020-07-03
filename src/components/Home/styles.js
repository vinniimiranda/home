import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;
  h1 {
    color: ${Colors.primary};
    text-transform: uppercase;
    font-size: 3rem;
    @media (max-width: 425px) {
      font-size: 2.3rem;
      /* text-align: center;
      align-self: center; */
    }
  }
  h2 {
    background-color: ${Colors.primary};
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 0.3rem;
    width: max-content; 
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
    &:hover {
      transform: rotateX(360deg);
    }
    @media (max-width: 425px) {
      /* text-align: center;
      align-self: center; */
      font-size: 1.3rem;
    }
  }

  p {
    color: #666;
    font-size: 1rem;
    transition: color ease 0.4s;
    width: 100%;
    &:hover {
      color: #999;
    }
  }

  @media (min-width: 1024px) {
    justify-content: center;
    
  }

  @media (max-width: 425px) {
    padding: 1rem;
    
    
  }
`;
