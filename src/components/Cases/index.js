import React from 'react';

import { FaGithub, FaChrome } from 'react-icons/fa';
import { Container, Title, List, ListItem, Links } from './styles';
import b3IMG from '../../assets/b3-bg.png';
import mlIMG from '../../assets/ml-bg.png';
import vuecinemaIMG from '../../assets/vuecinema-bg.png';
import memeIMG from '../../assets/meme-bg.png';

export default function Cases() {
  return (
    <Container>
      <Title>Cases</Title>

      <List>
        <ListItem>
          <h1>B3 WEB</h1>
          <img src={b3IMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
          <Links>
            <a
              href="https://github.com/vinniimiranda/b3-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://b3-web.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChrome />
            </a>
          </Links>
        </ListItem>
        <ListItem>
          <h1>Vue Cinema</h1>
          <img src={vuecinemaIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
          <Links>
            <a
              href="https://github.com/vinniimiranda/vue-cinema"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="http://vuecinema.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChrome />
            </a>
          </Links>
        </ListItem>
        <ListItem>
          <h1>Mercado Livre Clone</h1>
          <img src={mlIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
          <Links>
            <a
              href="https://github.com/vinniimiranda/mercado-livre-clone-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://mercado-livre-clone.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChrome />
            </a>
          </Links>
        </ListItem>
        <ListItem>
          <h1>Meme Generator</h1>
          <img src={memeIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
          <Links>
            <a
              href="https://github.com/vinniimiranda/memegenerator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://memereact.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChrome />
            </a>
          </Links>
        </ListItem>
      </List>
    </Container>
  );
}
