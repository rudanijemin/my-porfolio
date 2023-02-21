import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import newsmonkey1 from "../assets/img/NewsMonkey1.png"
import newsmonkey2 from "../assets/img/NewsMonkey2.png"
import newsmonkey3 from "../assets/img/NewsMonkey3.png"
import crypto1 from "../assets/img/cripto 1.png"
import crypto2 from "../assets/img/cripto 2.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const newsmonkey = [
    {
      title: "Newmonkey",
      description: "Get your daily dose of news for free",
      imageURL: newsmonkey1
    },
    {
      title: "Newmonkey",
      description: "Business Headlines",
      imageURL: newsmonkey2
    },
    {
      title: "Newmonkey",
      description: "Sports Headline",
      imageURL: newsmonkey3
    }
    
  ]
  const crypto = [
  
    {
      title: "crypto",
      description: "select onw coin",
      imageURL: crypto1
    },
    {
      title: "crypto",
      description: "select another coin",
      imageURL: crypto2
    }
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Instagram</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">crypto</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Get your daily dose of news for free.</p>
            
                      <Row>
                        {
                          newsmonkey.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>one coin transfer in to another coin</p>
                      <Row>
                        {
                          crypto.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}