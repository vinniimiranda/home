import React from 'react';

import { Container, Title, List, ListItem } from './styles';

import b3IMG from '../../assets/b3-bg.png';
import allianceIMG from '../../assets/alliance-bg.png';
import vuecinemaIMG from '../../assets/vuecinema-bg.png';
import memeIMG from '../../assets/meme-bg.png';

export default function Cases() {
  return (
    <Container>
      <Title>Cases</Title>

      <List>
        <ListItem>
          <h1>B3</h1>
          <img src={b3IMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
        </ListItem>
        <ListItem>
          <h1>Vue Cinema</h1>
          <img src={vuecinemaIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
        </ListItem>
        <ListItem>
          <h1>Alliance</h1>
          <img src={allianceIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
        </ListItem>
        <ListItem>
          <h1>Meme Generator</h1>
          <img src={memeIMG} alt="bg" />
          <p>
            Minim anim id proident duis est et ipsum in occaecat commodo
            pariatur culpa cillum ea. Enim consequat aliquip laboris nulla
            reprehenderit velit id ut. Anim laborum dolore aute est consequat .
          </p>
        </ListItem>
      </List>
    </Container>
  );
}
