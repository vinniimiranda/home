import React from 'react';

import {
  Container,
  Skill,
  List,
  ListItem,
  SkillContainer,
  Dot,
} from './styles';

export default function Skills() {
  return (
    <Container>
      <h1>SKILLS</h1>
      <SkillContainer>
        <Skill>
          <h2>LANGUAGES</h2>

          <List>
            <ListItem>
              <Dot />
              Java
            </ListItem>
            <ListItem>
              <Dot />
              C#
            </ListItem>
            <ListItem>
              <Dot />
              HTML5
            </ListItem>
            <ListItem>
              <Dot />
              CSS3
            </ListItem>
            <ListItem>
              <Dot />
              Javascript (ES6+)
            </ListItem>
            <ListItem>
              <Dot />
              SQL/No-SQL
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>FRAMEWORKS</h2>

          <List>
            <ListItem>
              <Dot />
              Nodejs
            </ListItem>
            <ListItem>
              <Dot />
              Jest
            </ListItem>
            <ListItem>
              <Dot />
              Express
            </ListItem>
            <ListItem>
              <Dot />
              Vuejs
            </ListItem>
            <ListItem>
              <Dot />
              Reactjs
            </ListItem>
            <ListItem>
              <Dot />
              Materialize
            </ListItem>
            <ListItem>
              <Dot />
              Quasar
            </ListItem>
            <ListItem>
              <Dot />
              Bootstrap
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>DATABASES</h2>

          <List>
            <ListItem>
              <Dot />
              MySQL
            </ListItem>
            <ListItem>
              <Dot />
              PostgreSQL
            </ListItem>
            <ListItem>
              <Dot />
              MongoDB
            </ListItem>
            <ListItem>
              <Dot />
              Redis
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>OTHERS</h2>

          <List>
            <ListItem>
              <Dot />
              Git/Github
            </ListItem>
            <ListItem>
              <Dot />
              Bash
            </ListItem>
            <ListItem>
              <Dot />
              AWS
            </ListItem>
            <ListItem>
              <Dot />
              CI/CD
            </ListItem>
            <ListItem>
              <Dot />
              Docker
            </ListItem>
          </List>
        </Skill>
      </SkillContainer>
    </Container>
  );
}
