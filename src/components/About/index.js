import React from 'react';

import { Container, Infos, Information } from './styles';

export default function About() {
  return (
    <Container>
      <img
        src="https://avatars1.githubusercontent.com/u/33462844?s=460&v=4"
        alt="Avatar"
      />
      <Infos>
        <Information>
          <span className="key">Name: </span>
          <span className="value">Flavio Vinicius Miranda</span>
        </Information>
        <Information>
          <span className="key">Age: </span>
          <span className="value">26</span>
        </Information>
        <Information>
          <span className="key">Occupation: </span>
          <span className="value">Fullstack Engineer at FCamara</span>
        </Information>
        <Information>
          <span className="key">Location: </span>
          <span className="value">São Paulo, Brazil</span>
        </Information>
        <Information>
          <span className="key">E-mail: </span>
          <span className="value">flaviovmiranda@hotmail.com</span>
        </Information>
      </Infos>
    </Container>
  );
}
