import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div`
  color: #fff;
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
    color: #01dbcc;
    border-bottom: 4px solid #01dbcc;
  }

  ${props =>
    props.active
      ? `color: #01dbcc;
    border-bottom: 4px solid #01dbcc;`
      : ``}
`;
