import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Container, Title } from './styles';

const jobHistory = [
  {
    company: 'HOUSI',
    title: 'Software Developer',
    date: 'Aug 2020 - current',
    description: {
      backend: [
        'Mantain and create new features for API using Nodejs, Typescript, MongoDB and Mysql',
        'Create unit tests and integration tests for API features',
        'Create and mantain integration between microservices',
        'AWS (S3, Cloudwatch, SNS, SQS, etc...)',
        'Help the team with tech decision and brainstorm',
        'Tech support ',
      ],
      frontend: [
        'Mantain and create new features for SPA using Reactjs (hooks) with Typescript, Redux, Redux-Saga',
        'Create and maint UI componentes using Material UI',
        'Mentoring others devs',
      ],
    },
    color: '#FA3C6E',
  },
  {
    company: 'FCamara',
    date: 'Jan 2020 - Aug 2020',
    title: 'Full Stack Engineer',
    description: {
      backend: [
        'Mantain and create new features for API using Nodejs, Typescript, MongoDB and Mysql',
        'Create unit tests and integration tests for API features',
        'Create and mantain integration between microservices',
        'AWS (S3, Cloudwatch, SNS, SQS, etc...)',
        'Help the team with tech decision and brainstorm',
        'Tech support ',
      ],
      frontend: [
        'Mantain and create new features for SPA using Reactjs (hooks) with Typescript, Redux, Redux-Saga',
        'Create and maint UI componentes using Material UI',
        'Mentoring others devs',
      ],
    },
    color: '#FC6027',
  },
  {
    company: 'WTT',
    date: 'May 2019 - Jan 2020',
    title: 'Full Stack Developer (Middle)',
    description: {
      backend: [
        'Mantain and create new features for API using Nodejs, Typescript, MongoDB and Mysql',
        'Create unit tests and integration tests for API features',
        'Create and mantain integration between microservices',
        'AWS (S3, Cloudwatch, SNS, SQS, etc...)',
        'Help the team with tech decision and brainstorm',
        'Tech support ',
      ],
      frontend: [
        'Mantain and create new features for SPA using Reactjs (hooks) with Typescript, Redux, Redux-Saga',
        'Create and maint UI componentes using Material UI',
        'Mentoring others devs',
      ],
    },
    color: '#82bc09',
  },
  {
    company: 'Red Fox',
    date: 'Feb 2019 - Apr 2019',
    title: 'Full Stack Developer (Junior)',
    description: {
      backend: [
        'Mantain and create new features for API using Nodejs, Typescript, MongoDB and Mysql',
        'Create unit tests and integration tests for API features',
        'Create and mantain integration between microservices',
        'AWS (S3, Cloudwatch, SNS, SQS, etc...)',
        'Help the team with tech decision and brainstorm',
        'Tech support ',
      ],
      frontend: [
        'Mantain and create new features for SPA using Reactjs (hooks) with Typescript, Redux, Redux-Saga',
        'Create and maint UI componentes using Material UI',
        'Mentoring others devs',
      ],
    },
    color: '#ff004e',
  },
  {
    company: 'Açovisa',
    date: 'Out 2017 - Feb 2019',
    title: ' Full Stack Developer (Intern)',
    description: {
      backend: [
        'Mantain and create new features for API using Nodejs, Typescript, MongoDB and Mysql',
        'Create unit tests and integration tests for API features',
        'Create and mantain integration between microservices',
        'AWS (S3, Cloudwatch, SNS, SQS, etc...)',
        'Help the team with tech decision and brainstorm',
        'Tech support ',
      ],
      frontend: [
        'Mantain and create new features for SPA using Reactjs (hooks) with Typescript, Redux, Redux-Saga',
        'Create and maint UI componentes using Material UI',
        'Mentoring others devs',
      ],
    },
    color: '#1269b0',
  },
];

export default function Experiences() {
  const [jobs, setJobs] = useState(jobHistory);

  return (
    <Container>
      <Title>Expiriences</Title>
      <div
        style={{
          maxHeight: '100%',
          minHeight: '65vh',
          overflow: 'hidden',
          overflowY: 'auto',
          width: '100%',
          flex: 1,
          scrollbarWidth: 0,
        }}
      >
        <VerticalTimeline>
          {jobs.map(job => (
            <VerticalTimelineElement
              key={job.company}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#111128',
                color: '#fff',
                borderColor: job.color,
                WebkitBoxShadow: `0 3px 0 ${job.color}`,
              }}
              contentArrowStyle={{ borderRight: `10px solid ${job.color}` }}
              date={job.date}
              iconStyle={{ background: job.color, color: '#fff' }}
              visible={false}
            >
              <h2
                style={{
                  color: job.color,
                }}
              >
                {job.title}
              </h2>
              <br />
              <h3
                style={{
                  color: job.color,
                }}
              >
                {job.company}
              </h3>
              <p>
                Back-end:
                <p>
                  {job.description.backend.map(l => (
                    <span>
                      {`● ${l};`}
                      <br />
                    </span>
                  ))}
                </p>
              </p>
              <br />
              <p>
                Front-end:
                <p>
                  {job.description.frontend.map(l => (
                    <span>
                      {` * ${l};`}
                      <br />
                    </span>
                  ))}
                </p>
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
}
