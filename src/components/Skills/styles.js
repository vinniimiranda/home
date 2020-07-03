import styled from 'styled-components';
import { MdStar } from 'react-icons/md';
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
  }
  @media (max-width: 425px) {
    padding: 0.5rem;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;

  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
   
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
 

  @media (min-width: 1440px) {
    justify-content: space-evenly;
  }
`;
export const Skill = styled.div`
  h2 {
    font-weight: bold;
    font-size: 1.2rem;
    color: ${Colors.primary};
  }
  flex-wrap: wrap;
  width: 100%;
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
  /* margin-left: 1rem; */
`;
export const Star = styled(MdStar)`
  color: ${Colors.primary};
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  transform: scale(0);
  margin-left: 0.3rem;
`;
export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;

  margin-right: 1rem;

  background-color: ${Colors.primary};

  transition: transform cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc25;
  color: #666;
  padding: 1rem;
  font-weight: bold;
  transition: all cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s;
  &:hover {
    color: ${Colors.primary};
    border-bottom-color: ${Colors.primary};

    ${Dot} {
      transform: scale(1.5) rotate(90deg);
    }

    ${Star} {
      transform: scale(1);
    }
  }
`;
