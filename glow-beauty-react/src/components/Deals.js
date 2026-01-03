
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Deals() {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {/* Left Deal */}
        <Col md={6}>
          <div 
            className="p-5 rounded-5 d-flex flex-column justify-content-center" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(229, 224, 235, 0.9), rgba(229, 224, 235, 0.4)), url("/img/deal1.jpg")',
              backgroundSize: 'cover',
              minHeight: '400px' 
            }}
          >
            <h6 className="text-uppercase ls-wide mb-3">Crazy Deals</h6>
            <h2 className="display-5 fw-bold mb-3">Buy one get one free</h2>
            <p className="mb-4">The best products you need for a daily glow.</p>
            <Button variant="outline-dark" className="rounded-0 w-25">Learn More</Button>
          </div>
        </Col>

        {/* Right Deal */}
        <Col md={6}>
          <div 
            className="p-5 rounded-5 d-flex flex-column justify-content-center text-white" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(59, 45, 61, 0.8), rgba(59, 45, 61, 0.2)), url("/img/deal2.jpg")',
              backgroundSize: 'cover',
              minHeight: '400px' 
            }}
          >
            <h6 className="text-uppercase ls-wide mb-3 text-light">Flash Sale</h6>
            <h2 className="display-5 fw-bold mb-3">Up to 70% Off</h2>
            <p className="mb-4 text-light">Limited time only. Curated collections.</p>
            <Button variant="outline-light" className="rounded-0 w-25">Shop Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
