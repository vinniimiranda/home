import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;

  img {
    width: 262px;
    height: 262px;
    filter: drop-shadow(7px 7px #01dbcc);
    margin-bottom: 2rem;
  }
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

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Information = styled.div`
  /* text-transform: uppercase; */
  font-weight: bold;
  margin-left: 2rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  .key {
    color: #999;
  }
  .value {
    color: #01dbcc;
  }
`;