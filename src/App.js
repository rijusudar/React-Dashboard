import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

import { CQData } from './modules/CQData/CQData';
import './App.css';


function App() {

  return (
    <React.Fragment>
      <Navbar bg="dark" className="header">
        <Container fluid>
          <Navbar.Brand className="brand-name" href="#home">Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col>
            <CQData />
          </Col>
        </Row>
      </Container>
    </React.Fragment >

  );
}

export default App;
