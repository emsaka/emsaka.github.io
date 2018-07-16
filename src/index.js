// JS libraries / tools
import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled, { injectGlobal, keyframes } from "styled-components";

// images
import dashboardImageUrl from "./img/dashboard.png";

const history = createBrowserHistory();

// global CSS styles
injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  * {
    font-family: Avenir;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

// components (HTML & CSS)
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;
  background-color: ${props => props.background};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => `${100 * (props.size / 12)}%`};
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const ProjectTextContainer = styled.div`
  width: 100%;
  color: white;
`;

const ProjectImage = styled.img`
  min-width: 256px;
`;

const Title = styled.h2`
  text-align: center;
`;

const NavigationBar = Row.extend`
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
`;

// data for website
const projects = [
  {
    tag: "ux + ui",
    header: "Graphic Design",
    description:
      "Various graphic design projects for Salsify and other clients",
    image: dashboardImageUrl,
    background: "green"
  },
  {
    tag: "ux + ui",
    header: "Graphic Design",
    description:
      "Various graphic design projects for Salsify and other clients",
    image: dashboardImageUrl,
    background: "red"
  },
  {
    tag: "ux + ui",
    header: "Graphic Design",
    description:
      "Various graphic design projects for Salsify and other clients",
    image: dashboardImageUrl,
    background: "blue"
  }
];

// app that is rendered for the website
const App = () => (
  <React.Fragment>
    <NavigationBar>
      <h2>Emily Saka</h2>
      <div>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/resume">Resume</StyledLink>
      </div>
    </NavigationBar>
    {projects.map(({ tag, header, description, image, background }) => (
      <Row background={background} style={{ marginBottom: "32px" }}>
        <Column size={6}>
          <ProjectTextContainer>
            <p>{tag}</p>
            <h1>{header}</h1>
            <p>{description}</p>
          </ProjectTextContainer>
        </Column>
        <Column size={6}>
          <ProjectImage src={image} />
        </Column>
      </Row>
    ))}
  </React.Fragment>
);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.querySelector("#root")
);
