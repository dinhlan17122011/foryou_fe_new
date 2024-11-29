// components/CakeCard.js
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { fetchCakes } from '../../hooks/api';

function CakeCard({ cake }) {
    const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCakes = async () => {
      try {
        const cakesData = await fetchCakes();
        setCakes(cakesData);
      } catch (error) {
        console.error('Error fetching cakes:', error);
      } finally {
        setLoading(false);
      }
    };

    getCakes();
  }, []);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cakes.image} />
      <Card.Body>
        <Card.Title>{cakes.name}</Card.Title>
        <Card.Text>{cakes.describe}</Card.Text>
        <Button variant="primary">Mua ngay</Button>
      </Card.Body>
    </Card>
  );
}

export default CakeCard;
