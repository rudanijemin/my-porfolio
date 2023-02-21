import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/githubpng.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jemin-rudani-a62b16202/"><img target="_blank"src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/rudanijemin"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/jemin_rudani/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Developed by Jemin Rudani 💻</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}