import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-container">
      <Container className="text-center text-light home-content">
        <h1 className="display-4 mb-4">Welcome to Our Amazing Store</h1>
        <p className="lead mb-4">
          Find the best products that match your needs and style.
        </p>
        <Button variant="primary" size="lg" href="/products">
          Explore Our Products
        </Button>
      </Container>
    </div>
  );
};

export default Home;