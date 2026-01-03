import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div className="mx-3 rounded-5 py-5" style={{ backgroundColor: '#1a1818', color: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-1">Sign up for newsletter</h2>
            <p className="text-secondary">Get notification about everything <span style={{ color: '#d4af37' }}>new and special offers!</span></p>
          </Col>
          <Col md={6}>
            <Form className="d-flex gap-0">
              <Form.Control
                placeholder="Your email Address"
                className="rounded-start-pill border-0 py-3 ps-4"
              />
              <Button 
                variant="dark" 
                className="rounded-end-pill px-4 py-3" 
                style={{ backgroundColor: '#3b2d3d' }}
              >
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}