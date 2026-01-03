import { Container, Button } from "react-bootstrap";

export default function PromoBanner() {
  return (
    <div className="mx-3 my-5">
      <section className="rounded-5 py-5 text-center shadow-sm" style={{ backgroundColor: "#e9e4f0" }}>
        <Container className="py-4">
          <p className="text-uppercase small fw-bold mb-2">Curated Collection</p>
          <h2 className="display-4 fw-bold mb-4">
            Up to <span style={{ color: "#8e67b3" }}>70% off</span> all products
          </h2>
          <Button variant="dark" className="rounded-pill px-5 py-2 fw-bold shadow-sm">
            Explore More
          </Button>
        </Container>
      </section>
    </div>
  );
}