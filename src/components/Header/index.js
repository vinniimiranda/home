import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md'

import { Container, Main, Nav, NavItem } from './styles';

export default function Header ({ xAxis, setXAxis }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)

  }, [xAxis])
  return (
    <Container>
      <Main>
        {/* <h1>Vinnii Miranda</h1> */}
      </Main>
      <MdMenu size={30} onClick={() => setOpen(!open)} className="menu" />
      <Nav open={open}>
        <NavItem />
        <NavItem active={xAxis === 0} onClick={() => setXAxis(0)}>
          Home
        </NavItem>
        <NavItem active={xAxis === 100} onClick={() => setXAxis(100)}>
          About
        </NavItem>
        <NavItem active={xAxis === 200} onClick={() => setXAxis(200)}>
          Skills
        </NavItem>
        <NavItem active={xAxis === 300} onClick={() => setXAxis(300)}>
          Cases
        </NavItem>
        <NavItem active={xAxis === 400} onClick={() => setXAxis(400)}>
          Expiriences
        </NavItem>
        <NavItem active={xAxis === 500} onClick={() => setXAxis(500)}>
          Contact
        </NavItem>
      </Nav>
    </Container>
  );
}
