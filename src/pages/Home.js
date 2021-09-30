import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Button, Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'
 
const Home = () => (
  <MainLayout>
    <Jumbotron className="bg-light">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1>QR Code Menu</h1>
            <h5 className="mt-4 mb-4">
              A smart way to share your digital menu!
            </h5>
            <br />
            <Button href="/places" variant="standard" size="lg">
              Create Your Menu
            </Button>
          </Col>
          <Col md={6}>
            <Image
              src="https://miro.medium.com/max/1838/1*-exya1bNIu2wAtYjSHY10A.gif"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </MainLayout>
);


export default Home;