import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;
  h1 {
    color: #01dbcc;
    text-transform: uppercase;
    font-size: 3rem;
  }
  h2 {
    background-color: #01dbcc;
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
    &:hover {
      color: #999;
    }
  }
`;
