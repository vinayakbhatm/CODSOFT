import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/onlinevoting.jpg";
import projImg2 from "../assets/img/onlinecatering.jpg";
import projImg3 from "../assets/img/tasktracker.jpg";
import projImg4 from "../assets/img/productcat.jpg";
import projImg5 from "../assets/img/stockprediction.jpg";
import projImg6 from "../assets/img/parking.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Voting Platform",
      description: "Python-Django",
      imgUrl: projImg1,
    },
    {
      title: "Online Catering Service",
      description: "HTML,CSS,JS,PHP",
      imgUrl: projImg2,
    },
    {
      title: "Task Tracker Application",
      description: "ReactJS",
      imgUrl: projImg3,
    },
    {
      title: "Product Catalouge",
      description: "ReactJS",
      imgUrl: projImg4,
    },
    {
      title: "Stock Prediction Web App",
      description: "Artificial Intelligence",
      imgUrl: projImg5,
    },
    {
      title: "Parking Space Counter",
      description: "Machine Learning",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out some of the projects I've worked on, highlighting my skills in React JS and web development. Each project represents a step in my learning journey and a new challenge overcome.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">List of Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
