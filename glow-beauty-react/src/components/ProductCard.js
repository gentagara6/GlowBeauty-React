import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product }) {
  return (
    <Card className="h-100 border-0 text-center bg-transparent">
      <div className="bg-white rounded-4 shadow-sm p-4 mb-3" style={{ height: "300px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Img 
          src={product.img} 
          style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} 
        />
      </div>
      <Card.Body className="p-0 text-center">
        <Card.Title className="fs-6 fw-bold mb-1 text-dark">{product.name}</Card.Title>
        <Card.Text className="text-muted small mb-3">{product.price}</Card.Text>
        <Button 
          variant="dark" 
          size="sm" 
          className="rounded-pill px-4 py-1"
          style={{ fontSize: '12px', backgroundColor: '#3b2d3d', border: 'none' }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}