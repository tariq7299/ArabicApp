import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import KalimaLogoSvg from "./KalimaLogoSvg";
KalimaLogoSvg;
function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-secondary-2 mb-3 mx-md-5" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
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
            className="expanded-navbar-body"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                LOGO
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About us</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2">Courses</Nav.Link>
                <Nav.Link href="#action2">Resources</Nav.Link>
                <Nav.Link href="#action2">Contact us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
