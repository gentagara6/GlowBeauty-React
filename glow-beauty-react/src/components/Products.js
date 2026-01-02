import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
  { id: 1, name: "Glazing Milk", price: "€29", img: "/img/p1.jpg" },
  { id: 2, name: "Peptide Lip", price: "€18", img: "/img/p2.jpg" },
  { id: 3, name: "Barrier Cream", price: "€34", img: "/img/p3.jpg" },
  { id: 4, name: "Face Serum", price: "€25", img: "/img/p4.jpg" }
];

export default function Products() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold text-secondary mb-4">
        New Arrivals
      </h2>

      <Row className="g-4">
        {products.map(p => (
          <Col md={3} sm={6} key={p.id}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Img
                src={p.img}
                style={{ height: "240px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-6 fw-semibold">
                  {p.name}
                </Card.Title>
                <Card.Text className="text-muted">
                  {p.price}
                </Card.Text>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill"
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}