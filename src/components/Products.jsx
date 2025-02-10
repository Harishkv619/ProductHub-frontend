import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products')
        setProducts(response.data)
      } catch (error) {
        setError('Error fetching products. Please try again later.')
      } finally {
        setLoading(false)
      }
    };

    fetchProducts()
  }, [])

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Amazing Products</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" />
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product._id}>
              <Card className="product-card shadow-lg rounded-4 border-0 overflow-hidden">
                <Card.Img variant="top" src={product.url} alt={product.name} className="product-card-img" />
                <Card.Body className="d-flex flex-column justify-content-between p-3">
                  <Card.Title className="text-center mb-3">{product.name}</Card.Title>
                  <Card.Text className="text-muted text-center mb-3">{product.description}</Card.Text>
                  <h5 className="text-center text-success mb-3">${product.price}</h5>
                  <Button variant="primary" className="w-100">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default Products