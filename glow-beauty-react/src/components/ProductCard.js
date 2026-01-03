import React, { useState } from 'react';
import { Card, Button, Alert } from "react-bootstrap";

export default function ProductCard({ product }) {
  const [showMsg, setShowMsg] = useState(false);

  const handleAddToCart = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  return (
    <Card className="h-100 border-0 text-center bg-transparent position-relative">
      {showMsg && (
        <div className="position-absolute top-0 start-0 w-100 p-2" style={{ zIndex: 10 }}>
          <Alert 
            variant="success" 
            className="m-0 py-2 border-0 shadow-sm fw-bold text-uppercase" 
            style={{ 
              backgroundColor: '#efe5efff', 
              color: '#480b41ff', 
              fontSize: '10px', 
              borderRadius: '20px' 
            }}
          >
            Added to Cart!
          </Alert>
        </div>
      )}

      <div 
        className="bg-white rounded-4 shadow-sm p-4 mb-3 d-flex align-items-center justify-content-center overflow-hidden" 
        style={{ 
          height: "320px",
          transition: "all 0.3s ease-in-out" 
        }}
      >
        <Card.Img 
          src={process.env.PUBLIC_URL + product.img} 
          className="img-fluid"
          style={{ 
            objectFit: 'contain', 
            maxHeight: '100%', 
            maxWidth: '100%',
            transition: "transform 0.3s ease"
          }} 
          alt={product.name}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      
      <Card.Body className="p-0">
        <Card.Title className="fs-6 fw-bold mb-1 text-dark text-uppercase" style={{ letterSpacing: '1px' }}>
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted small mb-3 fw-light italic">
          {product.price}
        </Card.Text>
        
        <Button 
          variant="dark" 
          size="sm" 
          className="rounded-pill px-4 py-2 shadow-sm text-uppercase fw-bold"
          style={{ 
            fontSize: '10px', 
            backgroundColor: '#3b2d3d', 
            border: 'none',
            letterSpacing: '1px'
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}