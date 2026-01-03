
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { newArrivals } from "../data/products"; // Use the correct export

export default function NewArrivals() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">New Arrivals</h2>
      <Row className="g-4">
        {newArrivals.map(product => (
          <Col key={product.id} lg={3} md={4} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

