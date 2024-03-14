import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import './index.css';

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        const data = await response.json();
        if (response.ok) {
          setJokes(data.jokes);
        } else {
          console.error('Error fetching jokes:', data);
        }
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  if (!jwtToken) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <Container>
        <h1 className="mt-4 mb-3">Jokes</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jokes.map(joke => (
            <Col key={joke.id}>
              <div className="p-3 border bg-light">{joke.joke}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
