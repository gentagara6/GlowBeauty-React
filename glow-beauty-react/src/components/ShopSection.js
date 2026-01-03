import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { shopProducts } from "../data/products";

export default function ShopSection() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">Shop Our Products</h2>
      <Row className="g-4">
        {shopProducts.map(product => (
          <Col key={product.id} lg={3} md={4} sm={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}