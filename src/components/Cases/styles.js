import styled from 'styled-components';

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
  color: #01dbcc;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const TechList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.1s;
  box-shadow: 3px 3px 0px #01dbcc;
  &:hover {
    box-shadow: 10px 10px 0px #01dbcc;
  }

  h2 {
    color: #01dbcc;

    font-size: 1.5rem;
  }
  span {
    color: #bababa;
    font-size: 1rem;
  }
`;

export const RepositoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const RepositoryListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
  height: 6rem;
  margin: 1rem 1rem 0 0;
  padding: 1rem;
  text-transform: capitalize;

  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  border: 4px solid transparent;
  &:hover {
    cursor: pointer;
    border: 4px solid #01dbcc;
    transform: rotateZ(2deg);
  }
  h3 {
    color: #bababa;

    font-size: 0.9rem;
  }
  p {
    color: #01dbcc;
    font-weight: bold;
  }

  span {
    color: #666;
    font-size: 0.7rem;
    white-space: nowrap;
  }
`;
