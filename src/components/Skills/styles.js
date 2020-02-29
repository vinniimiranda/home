import styled from 'styled-components';
import { MdStar } from 'react-icons/md';

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
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;
export const Skill = styled.div`
  h2 {
    font-weight: bold;
    font-size: 1.2rem;
    color: #01dbcc;
  }
  flex-wrap: wrap;

  margin-top: 2rem;
`;
export const Tech = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: 100%;
`;
export const Stars = styled.div`
  display: flex;
  margin-left: 1rem;
`;
export const Star = styled(MdStar)`
  color: #01dbcc;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  transform: scale(0);
  margin-left: 0.3rem;
`;
export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;

  margin-right: 1rem;

  background-color: #01dbcc;

  transition: transform cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc25;
  color: #666;
  padding: 1rem;
  font-weight: bold;
  min-width: 20rem;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  &:hover {
    color: #01dbcc;
    border-bottom-color: #01dbcc;

    ${Dot} {
      transform: scale(1.5) rotate(90deg);
    }

    ${Star} {
      transform: scale(1);
    }
  }
`;
