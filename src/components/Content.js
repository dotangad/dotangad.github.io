import React from 'react'
import styled from 'styled-components'

import { Section, SectionHeader, Link } from './Helpers'

const Content = styled.div`
  padding: 0 30px;
  font-size: 1.3rem;
  line-height: 2rem;
`

const BodyP = styled.p`
  margin: 15px 0;
`

const About = () => (
  <Section id="about">
    <SectionHeader>About</SectionHeader>
    <BodyP>
      <span aria-label="Wave" role="img" style={{ marginRight: '5px' }}>
        👋
      </span>
      Hi! I'm Angad, a student at{' '}
      <Link target="__blank" href="https://dpsrkp.net">
        Delhi Public School, R.K. Puram
      </Link>{' '}
      and member at{' '}
      <Link target="__blank" href="https://exunclan.com">
        Exun Clan
      </Link>
      . I am passionate about solving problems with technology and creating
      products people love. Some of my other interests include politics,
      economics and theological history.
    </BodyP>
  </Section>
)

const SchoolName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const SchoolDesc = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 500;
`

const Education = () => (
  <Section id="education">
    <SectionHeader>Education</SectionHeader>
    <div>
      <SchoolName>Delhi Public School R.K. Puram</SchoolName>
      <SchoolDesc>Class of '22</SchoolDesc>
      <BodyP>
        I study in the 9th Grade at Delhi Public School, R.K. Puram. I am an
        active member of my high school's computer club,{' '}
        <Link target="__blank" href="https://exunclan.com">
          Exun Clan
        </Link>{' '}
        where I build tools for internal use as well as applications which aid
        the logistics and administration of our annual tech symposium.
      </BodyP>
      <BodyP>
        I've won 15+ high-school and college technology quizzes, design
        competitions and hackathons.
      </BodyP>
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills">
    <SectionHeader>Skills</SectionHeader>
    <BodyP>
      I'm proficient in <strong>Node.js</strong>, <strong>React.js</strong>,{' '}
      <strong>PHP</strong> and <strong>Koa.js</strong>. I can also use vanilla
      JavaScript to create highly interactive user interfaces and memorable
      experiences.
    </BodyP>

    <BodyP>
      Along with Node and React, I have also used <strong>Ruby on Rails</strong>
      , <strong>Golang</strong>, and <strong>Angular</strong>.
    </BodyP>

    <BodyP>
      I like writing small Python or shell scripts which automate tasks like
      splitting PDFs, checking websites for updates and compiling stylesheets.
      My editor of choice is <strong>Emacs</strong>, he's my{' '}
      <Link href="https://github.com/dotangad/dotemacs">config</Link>.
    </BodyP>
  </Section>
)

export default () => (
  <Content className="content">
    <About />
    <Education />
    <Skills />
  </Content>
)
