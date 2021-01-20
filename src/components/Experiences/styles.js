import styled, { css } from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;
  max-height: 90vh;

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
