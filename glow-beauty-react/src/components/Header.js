import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="mt-3 mb-2"> 
      <Navbar expand="lg" className="bg-white shadow-sm rounded-pill px-4 py-2 border border-light">
        <Container fluid>
          <Navbar.Brand href="#home" className="pe-lg-4">
            <span className="fw-bold fs-3 text-dark" style={{ letterSpacing: '-1px', fontFamily: 'serif' }}>
              Glow <span className="fw-light text-muted">Beauty</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2 gap-lg-4">
              <Nav.Link href="#" className="text-dark fw-bold position-relative px-0" style={{ fontSize: '0.9rem' }}>
                Home
                <div style={{ height: '2px', backgroundColor: 'black', width: '100%', position: 'absolute', bottom: '0' }}></div>
              </Nav.Link>
              <Nav.Link href="#" className="text-muted fw-medium" style={{ fontSize: '0.9rem' }}>Shop</Nav.Link>
              <Nav.Link href="#" className="text-muted fw-medium" style={{ fontSize: '0.9rem' }}>Blog</Nav.Link>
              <Nav.Link href="#" className="text-muted fw-medium" style={{ fontSize: '0.9rem' }}>About</Nav.Link>
              <Nav.Link href="#" className="text-muted fw-medium" style={{ fontSize: '0.9rem' }}>Contact</Nav.Link>
              <Nav.Link href="#" className="text-dark ms-lg-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
