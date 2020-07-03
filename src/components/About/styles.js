import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;
  align-self: flex-start;
  img {
    width: 262px;
    transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
    height: 262px;
    box-shadow: 7px 7px 0px ${Colors.primary};
    margin-bottom: 2rem;

    &:hover {
      box-shadow: 10px 10px 0px ${Colors.primary};
    }

    @media (max-width: 425px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  h1 {
    color: ${Colors.primary};
    text-transform: uppercase;
    font-size: 3rem;
  }
  h2 {
    background-color: ${Colors.primary};
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 0.3rem;
    width: max-content;
    font-size: 2rem;
    text-transform: uppercase;
    transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
    &:hover {
      transform: rotateX(360deg);
    }
  }

  p {
    color: #666;
    font-size: 1rem;
    transition: color ease 0.4s;
    margin-top: 1rem;
    &:hover {
      color: #999;
    }
  }

  @media (max-width: 425px) {
     
      padding: 1rem;
    }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const Information = styled.div`
 
  font-weight: bold;
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 1rem;
  align-self: flex-start;
  word-break: break-all;
  .key {
    color: #999;
  }
  .value {
    color: ${Colors.primary};
  }

  a {
    svg {
      width: 2rem;
      height: 2rem;
      fill: #999;
      transform: scale(0.75);
      transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1);
        fill: #fff;
      }
    }
  }
  @media (max-width: 425px) {
      margin: .3rem 0  .3rem;
    }

`;
