import { Container, Button } from "react-bootstrap";
import coverPic from "../img/cover_pic_1.avif"; 

export default function Hero() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${coverPic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    borderRadius: '40px',
    margin: '0 20px',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  };

  return (
    <section style={heroStyle} className="mt-2">
      <Container>
        <div style={{ maxWidth: '500px' }}>
          <h1 className="display-1 fw-bold mb-3" style={{ lineHeight: '1' }}>
            Achieve <br /> Glass Skin
          </h1>
          <p className="fs-4 mb-4 fw-light">The Best Products</p>
          <Button variant="outline-light" className="rounded-pill px-5 py-2 border-2 fw-bold">
            Login
          </Button>
        </div>
      </Container>
    </section>
  );
}