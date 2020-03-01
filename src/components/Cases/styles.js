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
`;

export const Title = styled.h1`
  color: ${Colors.primary};
  text-transform: uppercase;
  font-size: 3rem;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  border: 4px solid ${Colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  margin: 1rem;
  max-width: 35rem;

  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  border: 4px solid transparent;
  &:hover {
    cursor: pointer;
    border: 4px solid ${Colors.primary};
    transform: rotateZ(1deg);
    p {
      color: #999;
    }
  }
  img {
    width: 20rem;
  }

  h1 {
    color: #fff;
  }
  p {
    font-size: 1rem;
    color: #333;
  }
`;
