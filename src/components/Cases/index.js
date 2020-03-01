import React, { useState, useEffect, useMemo } from 'react';

import {
  Container,
  Title,
  Techs,
  TechList,
  RepositoryListItem,
  RepositoryList,
} from './styles';

export default function Cases() {
  const [repos, setRepos] = useState([]);
  const lastRepos = useMemo(() =>
    repos.sort((a, b) => (a.pushed_at > b.pushed_at ? -1 : 1))
  );
  useEffect(() => {
    fetch('https://api.github.com/users/vinniimiranda/repos').then(response =>
      response.json().then(data => setRepos(data))
    );
  }, []);
  return (
    <Container>
      <Title>Cases</Title>
      <TechList>
        <Techs>
          <h2>Vue</h2>
          <span>
            {repos.filter(repo => repo.language === 'Vue').length} projects
          </span>
        </Techs>
        <Techs>
          <h2>JavaScript</h2>
          <span>
            {repos.filter(repo => repo.language === 'JavaScript').length}{' '}
            projects
          </span>
        </Techs>
        <Techs>
          <h2>TypeScript</h2>
          <span>
            {repos.filter(repo => repo.language === 'TypeScript').length}{' '}
            projects
          </span>
        </Techs>
        <Techs>
          <h2>Java</h2>
          <span>
            {repos.filter(repo => repo.language === 'Java').length} projects
          </span>
        </Techs>
        <Techs>
          <h2>Python</h2>
          <span>
            {repos.filter(repo => repo.language === 'Python').length} projects
          </span>
        </Techs>
        <Techs>
          <h2>HTML</h2>
          <span>
            {repos.filter(repo => repo.language === 'HTML').length} projects
          </span>
        </Techs>
        <Techs>
          <h2>CSS</h2>
          <span>
            {repos.filter(repo => repo.language === 'CSS').length} projects
          </span>
        </Techs>
        <Techs>
          <h2>PHP</h2>
          <span>
            {repos.filter(repo => repo.language === 'PHP').length} projects
          </span>
        </Techs>
      </TechList>

      <h3>Last Pushed Projects</h3>
      <RepositoryList>
        {lastRepos.map(repo => (
          <RepositoryListItem
            key={repo.name}
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <h3>{repo.name.replace(/\-/gi, ' ')}</h3>
            <p>{repo.language}</p>
            <span>pushed: {repo.pushed_at}</span>
          </RepositoryListItem>
        ))}
      </RepositoryList>
    </Container>
  );
}
