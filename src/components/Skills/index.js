import React from 'react';

import {
  Container,
  Skill,
  List,
  ListItem,
  SkillContainer,
  Dot,
  Tech,
  Stars,
  Star,
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
              <Tech>
                HTML5
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                CSS3
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Javascript (ES6+)
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Java
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                C#
                <Stars>
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Python
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                PHP
                <Stars>
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>

            <ListItem>
              <Dot />
              <Tech>
                SQL
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>FRAMEWORKS</h2>

          <List>
            <ListItem>
              <Dot />
              <Tech>
                Nodejs
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Jest
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Express
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Vuejs
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Reactjs
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Materialize
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Quasar
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Bootstrap
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>DATABASES</h2>

          <List>
            <ListItem>
              <Dot />
              <Tech>
                MySQL
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                PostgreSQL
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                MongoDB
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Redis
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
          </List>
        </Skill>

        <Skill>
          <h2>OTHERS</h2>

          <List>
            <ListItem>
              <Dot />
              <Tech>
                Git/Github
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Bash/Terminal
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                AWS
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                CI/CD
                <Stars>
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
            <ListItem>
              <Dot />
              <Tech>
                Docker/Docker Compose
                <Stars>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </Stars>
              </Tech>
            </ListItem>
          </List>
        </Skill>
      </SkillContainer>
    </Container>
  );
}
