import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Container, Infos, Information } from './styles';

export default function About () {
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
        <Information>
          <span className="key">Phone </span>
          <span className="value">+55 (11) 97636-2040</span>
        </Information>
        <Information>
          <div>
            <a href="https://github.com/vinniimiranda" target="_blank" without rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/flavio-vinicius-miranda-b8718b80/" target="_blank" without rel="noopener noreferrer" color="#0077b5">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/vinniimiranda" target="_blank" without rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.youtube.com/channel/UCMTpCNBy6UNm9-XSRuRZ9GQ" target="_blank" without rel="noopener noreferrer">
              <FaYoutube size={30} />
            </a>
          </div>
        </Information>
      </Infos>

      <p>
        <p>
          I like to solve problems, challenge myself and use my skills to the fullest.
      </p>
        <p>
          What I love most about Javascript is the way that we can create a fullstack application, easy, fast and powerful.
      </p>
        <p>
          I have been working with Javascript since 2016 and with Nodejs since 2017, my first contact with Javascript Frameworks was Vuejs (2017).
      </p>
        <p>
          I met React in 2018, since then I haven't stopped using it (currently I work with it every day).
      </p>
        <p>
          Recently I am studying about software architecture, to take my applications to a level of excellence, I believe that less is more, and that with the right architecture we can create better and better applications that facilitate people's daily lives
      </p>
      </p>
    </Container>
  );
}
