import { Container, Row, Col } from "react-bootstrap";
import { Youtube, Linkedin, Github } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";
import dev from '../assets/img/dev.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Navbar.Brand href="/">
          <h1 className="logo">Francis</h1>
          </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.youtube.com/channel/UCzWYas0cWXTT1YFgZQhLUyQ"><Youtube className="youtube" /></a>
              <a href="https://www.linkedin.com/in/vathan-silva/"><Linkedin className="linkedin" /></a>
              <a href="https://github.com/VathanSilva"><Github className="github" /></a>
              <a href="https://francissilva.vercel.app/"><img src={dev} alt="" /></a>
            </div>
            <p>Copyright 2022. Build ❤ By Francis Silva</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
