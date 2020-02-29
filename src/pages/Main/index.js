import React, { useState } from 'react';
import Header from '../../components/Header';
import Home from '../../components/Home';
import Skills from '../../components/Skills/index';

import { Container, Slider } from './styles';
import About from '../../components/About';

export default function Main() {
  const [xAxis, setXAxis] = useState(0);
  return (
    <Container>
      <Header xAxis={xAxis} setXAxis={setXAxis} />
      <Slider xAxis={xAxis}>
        <Home />
        <About />
        <Skills />
      </Slider>
    </Container>
  );
}
