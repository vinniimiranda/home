import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  min-width: 100%;
  flex-wrap: wrap;
  h1 {
    color: #01dbcc;
    text-transform: uppercase;
    font-size: 3rem;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  flex-wrap: wrap;
`;
export const Skill = styled.div`
  h2 {
    font-weight: bold;
    font-size: 1.2rem;
    color: #01dbcc;
  }
  margin-top: 2rem;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  /* border-radius: 50%; */
  margin-right: 1rem;

  background-color: #01dbcc;

  transition: transform cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
`;

export const List = styled.ul`
  list-style: none;

  border-radius: 8px;
`;

export const ListItem = styled.li`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc25;
  color: #666;
  padding: 1rem;
  font-weight: bold;
  /* &:last-child {
    border-bottom: none;
  } */
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  &:hover {
    color: #01dbcc;
    border-bottom-color: #01dbcc;

    ${Dot} {
      transform: scale(1.5) rotate(90deg);
    }
  }
`;
