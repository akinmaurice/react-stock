import React from 'react';
import { Container, Jumbotron, Form } from 'react-bootstrap';
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
            <br/>
            <Form className="search-form">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Search Stock" />
              </Form.Group>
            </Form>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
