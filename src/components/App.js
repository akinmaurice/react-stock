import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Header  from './layout/Header';

function App() {

  return (
    <div>
      <Header />
      <Jumbotron className="fluid d-flex align-items-center">
        <Container className="text-center">
          <h1>R-Stock</h1>
            <p>
              A React Stock App
            </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
