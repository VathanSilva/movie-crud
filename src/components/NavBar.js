import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import dev from '../assets/img/dev.png';

import { Youtube, Linkedin, Github } from "react-bootstrap-icons";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 className="logo text-white">Francis</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.youtube.com/channel/UCzWYas0cWXTT1YFgZQhLUyQ"><Youtube className="youtube" /></a>
                <a href="https://www.linkedin.com/in/vathan-silva/"><Linkedin className="linkedin" /></a>
                <a href="https://github.com/VathanSilva"><Github className="github" /></a>
                <a href="https://francissilva.vercel.app/"><img src={dev} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}
