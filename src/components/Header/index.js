import React from 'react';

import { Container, Main, Nav, NavItem } from './styles';

export default function Header({ xAxis, setXAxis }) {
  return (
    <Container>
      <Main>
        <h1>Vinnii Miranda</h1>
      </Main>
      <Nav>
        <NavItem active={xAxis === 0} onClick={() => setXAxis(0)}>
          Home
        </NavItem>
        <NavItem active={xAxis === 100} onClick={() => setXAxis(100)}>
          Skills
        </NavItem>
        <NavItem active={xAxis === 200} onClick={() => setXAxis(200)}>
          Expiriences
        </NavItem>
        <NavItem active={xAxis === 300} onClick={() => setXAxis(300)}>
          Cases
        </NavItem>
        <NavItem active={xAxis === 400} onClick={() => setXAxis(400)}>
          Contact
        </NavItem>
      </Nav>
    </Container>
  );
}
