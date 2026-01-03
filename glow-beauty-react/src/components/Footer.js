
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="mt-2 mx-3 mb-4"> 
      <div className="py-5 rounded-5 shadow-sm" style={{ backgroundColor: "#151515" }}>
        <Container>
          <Row className="gy-4 text-white">
            <Col lg={4}>
              <h5 className="fw-bold mb-4">Primary</h5>
              <ul className="list-unstyled text-secondary lh-lg small">
                <li>My account</li>
                <li>Shopping</li>
                <li>Contact us</li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled text-secondary lh-lg small">
                <li>Store Location</li>
                <li>Leave a Message</li>
                <li>New Arrivals</li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="fw-bold mb-4">Information</h5>
              <ul className="list-unstyled text-secondary lh-lg small">
                <li>Privacy Page</li>
                <li>About use</li>
                <li>Careers</li>
              </ul>
              <div className="mt-5 pt-3 border-top border-secondary opacity-25">
                <small>© 2026 Glow Beauty</small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}