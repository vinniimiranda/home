import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: none;
  }
  @media (max-width: 425px) {
    .menu{
      background-color: #000014;
      
      display: block;
      z-index: 999;
    }
  }
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

  @media (max-width: 425px) {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 20, 0.85);
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    z-index: 99;
    transition: transform cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s; 
    ${props => props.open ? `
     transform: translateX(0)
    `:
    `transform: translateX(100%)`
  }
  }
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

@media (max-width: 425px) {

  margin: 1rem 0;

}
`;
