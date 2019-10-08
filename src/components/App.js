import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import Header  from './layout/Header';
import companies from '../ companies';

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
            <ul className="list-inline">
              {companies.map(company => (
              <li key={company.key} className="list-inline-item">
                <Link to={`/stock/${company.value}`} className='btn btn-lg btn-warning btn-company'>
                  {company.key}
                </Link>
              </li>
              ))}
            </ul>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
