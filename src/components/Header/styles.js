import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  > h1 {
    color: ${Colors.primary};
  }
  text-transform: uppercase;
`;
export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: 4px solid transparent;
  padding-bottom: 0.1rem;
  transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
  &:hover {
    color: ${Colors.primary};
    border-bottom: 4px solid ${Colors.primary};
  }

  ${props =>
    props.active
      ? `color: ${Colors.primary};
    border-bottom: 4px solid ${Colors.primary};`
      : ``}
`;
