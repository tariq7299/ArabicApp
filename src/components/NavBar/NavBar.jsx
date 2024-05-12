import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
       <Navbar expand="lg" className="bg-white mb-3">
  <Container fluid>
    <Navbar.Brand href="#home"><img src='/src/assets/navBarLogo.png' width='100' height='100'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-lg`}
      aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
         
        </Nav>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
  );
}

export default NavBar;