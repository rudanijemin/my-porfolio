import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import newsmonkey1 from "../assets/img/NewsMonkey1.png"
import newsmonkey2 from "../assets/img/NewsMonkey2.png"
import newsmonkey3 from "../assets/img/NewsMonkey3.png"

import crypto1 from "../assets/img/cripto 1.png"
import crypto2 from "../assets/img/cripto 2.png"

import s1 from "../assets/img/s1.png"
import s2 from "../assets/img/s2.png"
import s3 from "../assets/img/s3.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const newsmonkey = [
    {
      title: "News",
      description: "Get your daily dose of news for free",
      imageURL: newsmonkey1
    },
    {
      title: "News",
      description: "Business Headlines",
      imageURL: newsmonkey2
    },
    {
      title: "News",
      description: "Sports Headline",
      imageURL: newsmonkey3
    }
    
  ]
  const ecommerse = [
    {
      title: "Product",
      description: "vearity of product",
      imageURL: s1
    },
    {
      title: "Cart",
      description: "add and remove cart",
      imageURL: s2
    },
    {
      title: "Payment",
      description: "real time payment",
      imageURL: s3
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
                      <Nav.Link eventKey="second"> E-Commerce</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p>E-commerace website with real time payment</p>
                      <Row>
                        {
                          ecommerse.map((project, index) => {
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