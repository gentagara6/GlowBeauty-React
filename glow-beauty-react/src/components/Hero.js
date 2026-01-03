import { useState } from 'react';
import { Container, Button, Modal, Form } from "react-bootstrap";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login with:", formData.email);
      alert(`Welcome, ${formData.email}!`);
    } else {
      console.log("Signup with:", formData.name);
      alert(`Account created for: ${formData.name}`);
    }
    setShowModal(false);
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(/img/cover_pic_1.avif)`,
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
          <Button 
            variant="outline-light" 
            className="rounded-pill px-5 py-2 border-2 fw-bold"
            onClick={() => { setIsLogin(true); setShowModal(true); }}
          >
            Login
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark">
            {isLogin ? "Login to Glow Beauty" : "Create Account"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 pb-4 text-dark">
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <Form.Group className="mb-3">
                <Form.Label className="small">Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Your Name" 
                  className="rounded-pill"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label className="small">Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="email@example.com" 
                className="rounded-pill"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="small">Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="••••••••" 
                className="rounded-pill"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required 
              />
            </Form.Group>
            
            <Button variant="dark" type="submit" className="w-100 rounded-pill py-2 mb-3" style={{ backgroundColor: '#3b2d3d' }}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            <div className="text-center small">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span 
                className="fw-bold text-decoration-underline" 
                style={{ cursor: 'pointer' }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}