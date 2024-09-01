import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import KalimaLogoSvg from "./KalimaLogoSvg";
KalimaLogoSvg;
import { useNavigate } from "react-router-dom";




function NavBar() {

  const navigate = useNavigate();

  return (
    <header>
      <Navbar expand="lg" className=" bg-secondary-2  mx-lg-5" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            {" "}
            <KalimaLogoSvg
              className={"kalima-logo--small kalima-logo--primary-color "}
            ></KalimaLogoSvg>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="expanded-navbar-body bg-secondary-2 "
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <KalimaLogoSvg
                  className={"kalima-logo--small kalima-logo--primary-color "}
                ></KalimaLogoSvg>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link data-to-scrollspy-id="hero-section" href="/#hero-section" >Home</Nav.Link>
                <Nav.Link data-to-scrollspy-id="courses-section" href="/#courses-section">Courses</Nav.Link>
                <Nav.Link href="/contact-us">Contact us</Nav.Link>
                <Nav.Link data-to-scrollspy-id="subscription-plans-section" href="/#subscription-plans-section">Plans</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
